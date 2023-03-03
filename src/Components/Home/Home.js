import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import Transport from '../Transport/Transport';

import './Home.css'
import { Link } from 'react-router-dom';
import vehicles_data from '../../fakeData/Vehicle';
const Home = () => {
    //Setting chosen Vehicle inside a state
    const [vehicle, setVehicle] = useState();

    //Loading Vehicle data from fakedata
    const vehicles = [...vehicles_data];
        //console.log(vehicles);
    return (
        <div>
            <Header />
            <Container className='main-container'>
                {/* <Link to='/destination/bike'> */}

                {
                    vehicles.map(vehicle => <Transport key={vehicle.id} vehicle={vehicle}></Transport>)
                }
                {/* </Link> */}


            </Container>
        </div>
    );
};

export default Home;