import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
//Reading user context
import {userContext} from '../../App';
//Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';
import { useNavigate, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser]= useContext(userContext);

    //For redirecting
    const navigate= useNavigate();
    const location= useLocation();
    const from= location.state?.from || "/";


    //Google sign in 
    const googleProvider = new firebase.auth.GoogleAuthProvider();    
    const handleGoogleSignIn=()=>{
        firebase.auth()    
        .signInWithPopup(googleProvider)
        .then(result=>{
            const user= result.user;
            setLoggedInUser(user);  
            navigate(from);          
        }).catch(error=>{
            const errorMessage= error.message;
            console.log(errorMessage);
        })
    }

    

    return (
        <div>
            <Header></Header>
            <Button onClick={handleGoogleSignIn}>Login</Button>
            <h3>Login page</h3>
            <p>User: {loggedInUser.displayName}</p>
        </div>
    );
};

export default Login;