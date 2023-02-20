import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Transport = (props) => {
    //Reading Transport State from Context
    
    const { id, transport, image } = props.transport;
    const handleClick = () => {
        console.log('handle click');
    }
    return (
        <div>
            <Link to='/destination'>
                <Card onClick={handleClick} style={{ width: '18rem' }} className='card'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='card-title'>{transport}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Transport;