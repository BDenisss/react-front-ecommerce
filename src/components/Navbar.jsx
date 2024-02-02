// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeStyle = { color: '#61dafb' }; // La couleur que vous préférez pour les liens actifs

    return (
        <nav className="navbar">
            <NavLink 
                to="/" 
                style={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
            >
            Home
            </NavLink>
            <NavLink 
                to="/cart" 
                style={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
            >
                Cart
            </NavLink>
        </nav>
    );
};

export default Navbar;
