import { Route, Navigate, useLocation } from 'react-router-dom';

import React, { useState, useContext } from 'react';
import { userContext } from '../../App';




const PrivateRoute = ({children}) => {
    //Reading logged in user form usercontext
    const [loggedInUser, setLoggedInUser]= useContext(userContext);

    const location= useLocation();
    return (
        loggedInUser.displayName ? children : <Navigate to='/login' state={{from: location}} />        
    );
};

export default PrivateRoute;