import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Content.module.css'

const Content: FC = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.setItem('isAuth', 'false')
        navigate('login', { replace: true })
    }

    return (
        <div className={styles.container}>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Content