import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext} from '../context/CartContext';
import './Navbar.css';
import logo from '../logo.svg';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const activeStyle = { color: '#61dafb' };
    const { state } = useContext(CartContext);

    return (
        <nav className="navbar">
            <div>
                <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
                    <FaHome/> Home
                </NavLink>
                <NavLink to="/cart" style={({ isActive }) => isActive ? activeStyle : undefined}>
                    <FaShoppingCart/> Cart ({state.items.length})
                </NavLink>
            </div>
            <div>
                <img className='App-logo' src={logo} alt="react-logo" />
            </div>
        </nav>
    );
};

export default Navbar;
