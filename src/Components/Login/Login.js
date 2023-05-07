import Header from '../Header/Header';
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
//Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//Reading user context
import { loggedInUserContext, userContext } from '../../App';
//Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);





const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    const [user, setUser]= useContext(userContext);
    //setting User state
    const [newUser, setNewUser] = useState(false);
    // const [user, setUser] = useState({
    //     isSignedIn: false,
    //     //displayName: '',
    //     photoURL: ''
    // })

    //Form validation
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name == 'email') {
            isFormValid = /^\S+@\S+\.\S+$/.test(e.target.value);
            // console.log(isEmailValid)
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
            //console.log(user.password);
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
               // console.log(user.displayName);
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    //handle login
    const handleLogin = (e) => {
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    //const user = userCredential.user;
                    //console.log(user);
                    setLoggedInUser(user);
                    navigate(from, {replace: true});
                    console.log(user);
                    //console.log(user.email, user.password);
                   // console.log(user);
                    
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
            <h3>Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required name='email' type="email" placeholder="Enter email" onBlur={handleBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control required name='password' type="password" placeholder="Password" onBlur={handleBlur} />
                </Form.Group>
                <Button variant="primary" type='submit'>
                    Login
                </Button>
            </Form>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
            <Link to='/newUser'>New User</Link>
        </div>
    );
};

export default Login;