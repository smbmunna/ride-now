import React, { useContext } from 'react';
import Header from '../Header/Header';

const Destination = ({children}) => {
    return (
        <div>
            <Header></Header>
            <h3>This is destination</h3>
        </div>
    );
};

export default Destination;