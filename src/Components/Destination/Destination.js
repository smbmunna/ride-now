import React, { useContext } from 'react';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { transportContext } from '../../App';

const Destination = () => {
    //Reading chosen transport from state
    const [transport, setTransport]= useContext(transportContext);
    const handleSubmit=(e)=>{
        console.log('hello')
        e.preventDefault();
    }


    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Pick From</Form.Label>
                                <Form.Control name="from" placeholder="From Destination" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Pick To</Form.Label>
                                <Form.Control name="to" placeholder="To Destination" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type='date' name="date" />
                            </Form.Group>
                            <Button variant="warning" type='submit'>
                                Search
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <h3>Map Section</h3>
                        <img src='https://cdn.road.cc/sites/default/files/styles/main_width/public/google-maps-july-2022-update.jpg'></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;