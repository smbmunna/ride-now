import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';


const SearchForm = (props) => {
    const {handleBlur,handleSubmit}= props;
    return (
        <div>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control name="from" placeholder="From Destination" onBlur={handleBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control name="to" placeholder="To Destination" onBlur={handleBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='date' name="date" onChange={handleBlur} />
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
        </div>
    );
};

export default SearchForm;