import React from 'react';
import { login } from '../../../redux/actions/users';
import './Login.scss';
import { notification } from 'antd';
import { UnlockOutlined } from '@ant-design/icons'

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
                    props.history.push('/profile');
                }, 2000);
            })
            .catch(() => {
                notification.error({ message: 'Login', description: 'Hubo un problema al logearte' })
            })
    }
    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <div className="illustration"><UnlockOutlined />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control item" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control item" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block login-up" variant="contained" color="primary"> Entrar </button>
                </div>
            </form>
        </div>
    )
}
export default Login;