import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { registerUser } from '../../api/Services'

const SignUp = () => {
    const [status, setStatus] = useState()
    const [error, setError] = useState()
    const { formState: { errors }, register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const addNewUser = async (data) => {
        try {
            const response = await registerUser(data)
            setStatus(response)
        } catch (error) {
            setError(error)
        }
    }
    const handleFormSubmit = (data) => {

        //console.log(data)
        // const newUser = {
        //     username: data.user_name,
        //     password: data.user_password,
        //     email: data.user_email,
        // }
        addNewUser(data)
        navigate("/auth/signin")
    }
    return (
        <div className="card">
            <div className="card-header">Signup</div>
            <div className="card-body">
                <Form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="form-group mb-3 row">
                        <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Name</label>
                        <div className="col-md-6">
                            <input type="text" id="username" className="form-control" name="username"
                                {...register("username", { required: "Enter username" })}
                            />
                        </div>
                        <div className='text-danger' >{errors?.username?.message}</div>
                    </div>
                    <div className="form-group mb-3 row">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                        <div className="col-md-6">
                            <input type="text" id="email" className="form-control" name="email"
                                {...register("email", { required: "Enter email address" })} />
                        </div>
                        <div className='text-danger' >{errors?.email?.message}</div>
                    </div>

                    <div className="form-group mb-3  row">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                        <div className="col-md-6">
                            <input type="password" id="password" className="form-control" name="password"
                                {...register("password", { required: "Enter password" })}
                            />
                        </div>
                        <div className='text-danger' >{errors?.password?.message}</div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                        <button type="submit" className="btn btn-primary">
                            Signup
                        </button><br />
                        <NavLink to="/auth/signin" className="btn btn-link d-block">
                            Signin
                        </NavLink>
                    </div>
                </Form>

                {/* <hr />
                {JSON.stringify(status)}

                Error :
                {JSON.stringify(error)} */}
            </div>
        </div>
    )
}

export default SignUp
