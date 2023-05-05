import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Popular = () => {
    const [recepies, setRecepies] = useState([])
    fetch('https://project-murighonto-server-sumonashimu.vercel.app/recepies')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setRecepies(data)
        })
        .catch(error => console.error(error));
    let newrecepe;
    if (recepies) newrecepe = recepies.slice(0, 6);
    return (
        <Container className='text-center d-block my-5'>
            <h1 className='banner-title my-4'>Popular on Our Site</h1>
            <p>Conveniently imaiipact are worldwide andng datang arovem theme with there.Conveniently imaiipact are worldwide andng datang arovem theme with there</p>
            <Row xs={2} md={3} className="g-4" style={{ border: '0' }}>
                {newrecepe.map(item => (
                    <Col key={item.id} className='recepe-card' >
                        <Card className='h-100' style={{ border: '0' }}>
                            <Card.Img variant="top" src={item.picture} className='popular-img mx-auto' />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <FaStar color={'orange'}></FaStar>
                                    <FaStar color={'orange'}></FaStar>
                                    <FaStar color={'orange'}></FaStar>
                                    <FaStar color={'orange'}></FaStar>
                                    {(item.rating >= 4.5) ? <FaStarHalfAlt color={'orange'}></FaStarHalfAlt> : <></>}
                                    <small>( {item.rating} )</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
                <Button variant='warning'>Show All Recepies</Button>
        </Container>
    );
};

export default Popular;