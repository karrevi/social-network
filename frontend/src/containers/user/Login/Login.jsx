import React from 'react';
import './Login.scss';
import { login } from '../../../redux/actions/users';
import { notification } from 'antd';

const Login = props => {
    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        login(user)
            .then(res => {
                notification.success({ message: 'Login', description: res.data.message, duration: 2000 })
                setTimeout(() => {
                    props.history.push('');
                }, 2000);
            })
            .catch(() => {
                notification.error({ message: 'Login', description: 'Hubo un problema al logearte' })
            })
    }
    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                <input type="password" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                <button type="submit" variant="contained" color="primary">
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login;