import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { loggedInUserContext } from '../../App';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
const Header = () => {
    const [loggedInUser] = useContext(loggedInUserContext);
    return (
        <div>
            <Navbar className='main-navbar'>
                <Container>
                    <Navbar.Brand href="#home">Ride Now</Navbar.Brand>
                    <Link className="navigation-items" to="/home">Home</Link>
                    <Link className="navigation-items" to="/destination">Destination</Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {
                            loggedInUser.email
                                ? <NavDropdown className='dropdown-title' title={loggedInUser.displayName}>
                                        <NavDropdown.Item>
                                            <Link className='nav-dropdown' to="/logout">Logout</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                : <Link className="navigation-items" to="/login">Login</Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;