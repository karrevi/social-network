import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <header className="headerStation">
            <NavLink to="/register" exact>Register</NavLink>
            <NavLink to="/login" exact>Login</NavLink>
        </header>
    )
}

export default Header