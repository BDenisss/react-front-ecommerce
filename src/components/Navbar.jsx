import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.svg';
import { FaHome, FaOpencart } from 'react-icons/fa';

const Navbar = () => {
    const activeStyle = { color: '#61dafb' }; // La couleur que vous préférez pour les liens actifs

    return (
        <nav className="navbar">
            <div>
            <NavLink 
                to="/" 
                style={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
            >
            <FaHome/> Home
            </NavLink>
            <NavLink 
                to="/cart" 
                style={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
            >
            <FaOpencart/> Cart
            </NavLink>
            </div>
            <div>
                <img className='App-logo' src={logo} alt="react-logo" />
            </div>
        </nav>
    );
};

export default Navbar;
