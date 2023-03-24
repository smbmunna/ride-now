import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { transportContext } from '../../App';


const Transport = (props) => {
    //Reading Transport State from Context
    const [transport, setTransport]= useContext(transportContext);
    const { id, vehicle, image } = props.vehicle;
    
    const handleClick = () => {
        setTransport({
            chosenVehicle: vehicle,
            vehiclePicture: image
        })
    }
    return (
        <div>
            <Link to='/destination'>
                <Card onClick={handleClick} style={{ width: '18rem' }} className='card'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='card-title'>{vehicle}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Transport;