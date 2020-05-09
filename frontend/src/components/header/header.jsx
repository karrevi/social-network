import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/users';


const Header = props => {
    
    return <header className="headerStation">
        {props.userName ?
            <div className='userZone'>
                <NavLink to='/home' exact>Home</NavLink>
                <NavLink to='/profile' exact> Hola, {props.userName.name}</NavLink>
                <NavLink to='/users' exact>Usuarios</NavLink>
                <button onClick={logout} className="btn-logout">Cerrar Sesión</button>
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