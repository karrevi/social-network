import React from 'react';
import { register } from '../../../redux/actions/users';
import './Register.scss';
import { notification } from 'antd';
import { UserOutlined } from '@ant-design/icons'



const Register = props => {
    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            age: event.target.age.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        register(user).then(res => {
            notification.success({ message: 'Register', description: res.data.message })
            setTimeout(() => {
                props.history.push('/login')
            }, 1500);
        })
            .catch(() => {
                notification.error({ message: 'Register', description: 'Hubo un problema al registrarte' })
            })
    }
    return (
        <div className="registerContainer">
            <form onSubmit={handleSubmit}>
                <div className="form-icon"> <UserOutlined />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" label="Nombre" name="name" placeholder="Introduzca su nombre" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" label="Nombre" name="surname" placeholder="Introduzca su apellido" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" label="Nombre" name="age" placeholder="Introduce tu edad" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control item" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control item" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account" variant="contained" color="primary">Crear cuenta</button>
                </div>
            </form>
        </div>
    )
}

export default Register;