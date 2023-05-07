import { Route, Navigate, useLocation } from 'react-router-dom';

import React, { useState, useContext } from 'react';
import { loggedInUserContext } from '../../App';




const PrivateRoute = ({children}) => {
    //Reading logged in user form usercontext
    const [loggedInUser, setLoggedInUser]= useContext(loggedInUserContext);

    const location= useLocation();
    return (
        loggedInUser.email ? children : <Navigate to='/login' state={{from: location}} />        
    );
};

export default PrivateRoute;