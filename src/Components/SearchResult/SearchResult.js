import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchResult.css';
import { Container } from 'react-bootstrap';
import { ReactBingmaps } from 'react-bingmaps';


const SearchResult = (props) => {
    const { finalResult, input, vehicleImage } = props;

    console.log(finalResult);

    return (
        <div>
            <Row>
                <Col className='card-container'>

                    <Card >
                        <Card.Body>
                            <div className='card-heading'>
                                <Card.Title><h5>{input.from}</h5> </Card.Title>
                                <span><img src='https://i.ibb.co/NtX70rf/right-arrow.png'></img></span>
                                <Card.Title><h5>{input.to}</h5></Card.Title>
                            </div>
                            {
                                finalResult.map(result =>
                                    <Row className='result-container'>
                                        <Col className='vehicle-img'><img src={vehicleImage}></img></Col>
                                        <Col><h3 className='vehicle-name'>{result.vehicle}</h3></Col>
                                        <Col className='people-img'><img src='https://i.ibb.co/VS7YkLF/user.png'></img></Col>
                                        <Col><h3 className='test3'>{result.capacity}</h3></Col>

                                    </Row>
                                )


                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h3>Map Section</h3>
                    {/* <img src='https://cdn.road.cc/sites/default/files/styles/main_width/public/google-maps-july-2022-update.jpg'></img> */}
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

export default SearchResult;