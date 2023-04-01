import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import ReactBingmaps from 'react-bingmaps/lib/components/ReactBingmaps/ReactBingmaps';


const SearchForm = (props) => {
    const { handleBlur, handleSubmit } = props;
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
                    <ReactBingmaps
                        bingmapKey="Algjh_SGEx6U5ELo38gXNsJYCOTV2_PltcJbkwkYd8Ch1f02CVIsdsh6Rxx2PpFI"
                        center={[13.0827, 80.2707]}
                    >
                    </ReactBingmaps>
                </Col>
            </Row>
        </div>
    );
};

export default SearchForm;