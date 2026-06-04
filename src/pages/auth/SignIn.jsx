import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        localStorage.setItem("login", true)
        navigate("/")
    }
    return (
        <div className="card">
            <div className="card-header">Signin</div>
            <div className="card-body">
                <Form action="" method="">
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" defaultValue="demo@gmail.com" required />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" defaultValue="password" required />
                    </Form.Group>



                    <div className="col-md-6 offset-md-4">
                        <Button onClick={handleLogin} className="btn btn-primary">
                            Signin
                        </Button>
                        <NavLink to="/auth/signup" className="btn btn-link d-block">
                            Signup
                        </NavLink>

                    </div>
                </Form>
            </div>
        </div>
    )
}

export default SignIn
