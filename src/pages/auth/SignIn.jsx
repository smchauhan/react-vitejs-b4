import React from 'react'
import { NavLink } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className="card">
            <div className="card-header">Signin</div>
            <div className="card-body">
                <form action="" method="">
                    <div className="form-group mb-3 row">
                        <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                        <div className="col-md-6">
                            <input type="text" id="email_address" className="form-control" name="email-address" required autofocus />
                        </div>
                    </div>

                    <div className="form-group mb-3  row">
                        <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                        <div className="col-md-6">
                            <input type="password" id="password" className="form-control" name="password" required />
                        </div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                        <NavLink to="/" className="btn btn-primary">
                            Signin
                        </NavLink>
                        <NavLink to="/auth/signup" className="btn btn-link d-block">
                            Signup
                        </NavLink>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
