import React from 'react';
import './header.scss';


const Header = () => {
    return (
        <header className="headerStation">
            <div className="headerUser">
                <navLink to = "/login" exact>Login</navLink>
                <navLink to = "/register" exact>Register</navLink>
            </div>
        </header>
    )
}

export default Header