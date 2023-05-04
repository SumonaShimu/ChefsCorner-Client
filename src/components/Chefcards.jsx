import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FcApproval, FcLike } from 'react-icons/fc';
import { GiForkKnifeSpoon } from "react-icons/gi";
const Chefcards = () => {
    const chefs = useLoaderData();
    console.log(chefs)
    return (
        <Container className='mt-5'>
            <div className='pb-5'>
                <h1 className='banner-title text-center d-block'>Meet Our Chefs</h1>
                <p className='text-center'>Bangali quisine imaiipact are worldwide and datang arovem theme with there.</p></div>
            <Row xs={2} md={3} className="g-4">
                {chefs?.map(chef =>
                    <Col key={chef.chef_id}>
                        <Card>
                            <Card.Header as="h5" className='d-flex align-items-center'>
                                <img src={chef.picture} className='card-img' />
                                <span className='ms-3'>{chef.name}</span>

                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <li><FcApproval></FcApproval> {chef.experience} years of experience</li>
                                    <li><GiForkKnifeSpoon color={'orange'}></GiForkKnifeSpoon> {chef.recipes} recepies </li>
                                    <li><FcLike></FcLike> {chef.likes} likes</li>
                                </Card.Text>
                                <Link to={`/chefs/${chef.chef_id}`} data={chef}><Button variant="outline-warning">View Recepies</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Chefcards;