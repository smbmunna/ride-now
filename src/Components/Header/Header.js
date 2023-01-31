import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Nav className="nav-bar-container">
            <Link className="navigation-items"  to="/home">Home</Link>
            <Link className="navigation-items" to="/destination">Destination</Link>
            <Link className="navigation-items" to="/home">Blog</Link>
            <Link className="navigation-items" to="/home">Contact</Link>
            <Link className="navigation-items" to="/login">Login</Link>
        </Nav >
    );
};

export default Header;