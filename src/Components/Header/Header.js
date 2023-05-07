import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';
import { loggedInUserContext } from '../../App';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    return (
        <div>
            <Row>
                <Col>
                    <Nav className="nav-bar-container">
                        <Link className="navigation-items" to="/home">Home</Link>
                        <Link className="navigation-items" to="/destination">Destination</Link>
                        <Link className="navigation-items" to="/home">Blog</Link>
                        <Link className="navigation-items" to="/home">Contact</Link>
                        <Link className="navigation-items" to="/login">Login</Link>
                    </Nav >
                </Col>
                <Col className="d-flex flex-row-reverse">

                    <Navbar.Text className='me-2'>
                        <NavDropdown title={loggedInUser.displayName} id="nav-dropdown">
                            <NavDropdown.Item >
                                <Link className="navigation-items" to="/logout">Log Out</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Navbar.Text>
                </Col>
            </Row>

        </div>

    );
};

export default Header;