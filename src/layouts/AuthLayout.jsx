import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <main className='container d-flex justify-content-center'>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <Outlet />
                </div>
            </div>

        </main>
    )
}

export default AuthLayout