import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" activeClassName="active" exact={true}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/calendar" activeClassName="active" exact={true}>Calendar</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/meetings" activeClassName="active" exact={true}>Meetings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/teams" activeClassName="active" exact={true}>Teams</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login" activeClassName="active" exact={true}>Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Signup" activeClassName="active" exact={true}>Signup</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;