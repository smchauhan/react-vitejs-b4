import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { authUser } from "../../api/Services"
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState()
    const [error, setError] = useState()

    const { formState: { errors }, register, handleSubmit } = useForm()
    const checkUserCredentials = async (data) => {
        try {
            const response = await authUser(data)
            if (response.data[0].email === data.email && response.data[0].password === data.password) {
                toast.success("Login successfully done")
                navigate("/")
                localStorage.setItem("login", true)
                localStorage.setItem("id", response.data[0].id)
            } else {
                toast.error("Invalid username or password")
            }
            setStatus(response)
        } catch (error) {
            setError(error)
        }
    }

    const handleFormSubmit = (data) => {
        checkUserCredentials(data)
        // 
        // navigate("/")
    }

    return (
        <div className="card">
            <div className="card-header">Signin</div>
            <div className="card-body">
                <Form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" defaultValue="demo@gmail.com"
                            {...register("email", { required: "Enter email" })} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" defaultValue="password"
                            {...register("password", { required: "Enter password" })} />
                    </Form.Group>


                    <div className="col-md-6 offset-md-4">
                        <Button type='submit' className="btn btn-primary">
                            Signin
                        </Button>
                        <NavLink to="/auth/signup" className="btn btn-link d-block">
                            Signup
                        </NavLink>

                    </div>
                </Form>
                Status
                <pre>{JSON.stringify(status, null, 2)}</pre>
                {/*   Error
                <pre>{JSON.stringify(error, null, 2)}</pre> */}
                <ToastContainer />
            </div>
        </div>
    )
}

export default SignIn
