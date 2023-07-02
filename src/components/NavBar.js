import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../logo/logo.png';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img className="logo" src={logo} alt="Logo" />

      <nav>
        <ul className="navbar-links">
          <li className="navbar-links-item">
            <NavLink to="/">View Properties</NavLink>
          </li>
          <li className="navbar-links-item">
            <NavLink to="add-property">Add a Property</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
