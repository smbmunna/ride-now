import Header from '../Header/Header';
import './Login.css';
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
//Bootstrap Components
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Material UI icons
import GoogleIcon from '@mui/icons-material/Google';
import Facebook from '@mui/icons-material/Facebook';


//Reading user context
import { loggedInUserContext, userContext } from '../../App';
//Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';
import { Row, Col } from 'react-bootstrap';
firebase.initializeApp(firebaseConfig);





const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    const [user, setUser] = useContext(userContext);
    //setting User state
    const [newUser, setNewUser] = useState(false);

    //Form validation
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name == 'email') {
            isFormValid = /^\S+@\S+\.\S+$/.test(e.target.value);
        }
        if (e.target.name == 'password') {
            const passHas5Chars = e.target.value.length > 4;
            const passHasNumber = /(?=.*[0-9])/.test(e.target.value);
            isFormValid = passHas5Chars && passHasNumber;
        }

        if (isFormValid) {
            let newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }

    //For redirecting
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";


    //Google sign in 
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                const user = result.user;
                setLoggedInUser(user);
                navigate(from);                
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    //Facebook sign in 
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSignIn = () => {
        firebase.auth()
            .signInWithPopup(fbProvider)
            .then(result => {
                const user = result.user;
                setLoggedInUser(user);
                navigate(from);
            })
            .catch(error=>{
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    //handle login
    const handleLogin = (e) => {
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    setLoggedInUser(userCredential.user);
                    navigate(from, { replace: true });
                    //console.log(userCredential);
                })
                .catch(error => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                })
        }
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs="12" md="7" xl="6">
                        <h3 className='text-center'>Login</h3>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control required name='email' type="email" placeholder="Enter email" onBlur={handleBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control required name='password' type="password" placeholder="Password" onBlur={handleBlur} />
                            </Form.Group>
                            <div className='text-center'>
                                <Button variant="primary" type='submit'>Login</Button>
                            </div>


                        </Form>
                        <br />
                        <div className='text-center'>
                            <button className='google-btn' onClick={handleGoogleSignIn}>Login with Google <GoogleIcon /> </button>
                            <br />
                            <button className='fb-btn' onClick={handleFbSignIn}>Login with Facebook <Facebook /> </button>

                            <br />
                            <Link to='/newUser'>Create an Account</Link>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;