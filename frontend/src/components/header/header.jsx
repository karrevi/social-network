import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/users'


const Header = props => {
    return <header className="headerStation">
        <NavLink to="/" exact>Home</NavLink>

        {props.userName ?
            <div className="userZone">
                <NavLink to="/profile" exact> {props.userName.name}</NavLink>
                <span onClick={logout}>Cerrar Sesión</span>
            </div> :
            <div className="guestZone">
                <NavLink to="/register" exact>Register</NavLink>
                <NavLink to="/login" exact>Login</NavLink>
            </div>
        }
    </header>
}

const mapStateToProps = (state) => ({ userName: state.user.user });
export default connect(mapStateToProps)(Header);