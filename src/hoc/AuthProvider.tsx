import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthProvider: FC = () => {
    const isAuth = localStorage.getItem('isAuth') || false
    console.log(isAuth);

    if (!isAuth) return <Navigate to='login' replace />

    return (
        <Outlet />
    )
}

export default AuthProvider