import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const login = localStorage.getItem("login") // it will return either true or false
    return login === "true" ? <Outlet /> : <Navigate to="/auth/signin" />
}

export default ProtectedRoutes
