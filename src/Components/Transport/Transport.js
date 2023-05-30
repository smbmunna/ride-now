import React, { useContext } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { transportContext } from '../../App';
import './Transport.css';


const Transport = (props) => {
    //Reading Transport State from Context
    const [transport, setTransport] = useContext(transportContext);
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
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col>
                            <Card onClick={handleClick} style={{ width: '150px' }} className='card'>
                                <Card.Img variant="top" src={image} className='card-img' />
                                <Card.Body>
                                    <Card.Title>{vehicle}</Card.Title>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                </Container>
            </Link>
        </div>
    );
};

export default Transport;