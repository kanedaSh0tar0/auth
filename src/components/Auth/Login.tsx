import { FC, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'

const Login: FC = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const body = JSON.stringify({
                email: email.current?.value,
                password: password.current?.value,
            })

            const res = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            })

            const resBody = await res.json()

            if (!res.ok) {
                alert(resBody.message)
                throw new Error(res.statusText)
            }

            localStorage.setItem('isAuth', 'true')
            navigate('/', { replace: true })
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <input ref={email} type='text' placeholder='email' />
                <input ref={password} type='password' placeholder='password' />
                <button onClick={handleLogin}>Login</button>
                <Link className={styles.link} to='/registration'>Registration</Link>
            </div>
        </div>
    )
}

export default Login