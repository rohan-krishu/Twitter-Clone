import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export default function ProtectedRoutes() {
    const auth = localStorage.getItem("loggedIn")
    return (
        auth ? <Outlet /> : <Navigate to={'/sign-in'} />
    )
}
