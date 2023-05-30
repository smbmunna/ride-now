import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container, Col, Row } from 'react-bootstrap';
import Transport from '../Transport/Transport';

import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
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
            <div className='title'>
                <h1>Ride Sharing Made Easier!</h1>
                <h3>Choose Your Desired Transport</h3>
            </div>
            <Container className='justify-content-md-center main-container'>

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