import React, { useContext } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';
import { loggedInUserContext } from '../../App';

const Logout = () => {

    const [loggedInUser,setLoggedInUser]= useContext(loggedInUserContext);

    //For redirecting
    const navigate = useNavigate();
    const from = "/login";

    firebase.auth().signOut().then(() => {
        navigate(from);
        setLoggedInUser([]);
    }).catch((error) => {
        console.log(error);
    });
    return (
        <div>
            <h2>This is Logout component</h2>
        </div>
    );
};

export default Logout;