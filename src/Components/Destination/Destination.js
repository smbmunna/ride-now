import React, { useContext } from 'react';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Destination = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Pick From</Form.Label>
                    <Form.Control name="from" placeholder="From Destination" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control name="to" placeholder="To Destination" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default Destination;