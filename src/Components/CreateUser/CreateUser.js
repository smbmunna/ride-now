import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
//Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from '../Login/firebase.config';
import { loggedInUserContext, userContext } from '../../App';
import { Container, Row, Col } from 'react-bootstrap';
firebase.initializeApp(firebaseConfig);


const CreateUser = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    //for showing display name
    const [displayName, setDisplayName]= useState('');
    //Setting user states
    const [newUser] = useState(true);
    
    const [user, setUser] = useContext(userContext);

    //For redirecting
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    //Form validation
    const handleBlur = (e) => {
        let isFormValid = true;
        
        if (e.target.name === 'email') {
            isFormValid = /^\S+@\S+\.\S+$/.test(e.target.value);
            // console.log(isEmailValid)
        }
        if (e.target.name === 'password') {
            const passHas5Chars = e.target.value.length > 4;
            const passHasNumber = /(?=.*[0-9])/.test(e.target.value);
            isFormValid = passHas5Chars && passHasNumber;
        }
        
        if (isFormValid) {
            let newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;//setting display in user state
            setDisplayName(e.target.displayName);
            setUser(newUserInfo);
            //console.log(user);
        }
    }
    const handleCreateAccount = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const googleUser = userCredential.user;
                    
                    googleUser.updateProfile({ displayName: user.displayName});
                    setLoggedInUser({
                        email:user.email, 
                        displayName: user.displayName,
                    })
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                })
        }
        if (!newUser && user.email && user.password) {
            console.log('login user');
        }
        e.preventDefault();
    }


    return (
        <div>
            <Header></Header>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs="12" md="7" xl="6">
                        <h3 className='text-center'>Create New User</h3>
                        <Form onSubmit={handleCreateAccount}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control required name='displayName' type="name" placeholder="Name" onBlur={handleBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control required name='email' type="email" placeholder="Enter email" onBlur={handleBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control required name='password' type="password" placeholder="Password" onBlur={handleBlur} />
                            </Form.Group>
                            <div className='text-center'>
                                <Button variant="primary" type='submit'>Create an Account</Button>
                            </div>
                            <p className='text-center'>Already Have Account? <Link to='/login'>Login</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CreateUser;