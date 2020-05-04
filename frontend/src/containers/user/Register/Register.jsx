import React from 'react';
import './Register.scss';
import { notification } from 'antd';
import { register } from '../../../redux/actions/users';


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
                <h2>Register</h2>
                <input type="text" label="Nombre" name="name" placeholder="Introduzca su nombre" />
                <input type="text" label="Nombre" name="surname" placeholder="Introduzca su apellido" />
                <input type="text" label="Nombre" name="age" placeholder="Introduce tu edad" />
                <input type="email" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                <input type="password" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                <button type="submit" variant="contained" color="primary">Register</button>
            </form>
        </div>
    )
}

export default Register;