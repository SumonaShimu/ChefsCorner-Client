import React from 'react';
import { Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { FcDebian } from "react-icons/fc";
import { FaStarHalfAlt } from "react-icons/fa";

const Recepies = () => {

    const recepies = useLoaderData();
    console.log('entered to recepes page', recepies)
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {recepies.map(recepie =>
                    <Col key={recepie.id}>
                        <Card>
                            <Card.Header className='text-center'>
                                <h4>{recepie.name}</h4>
                                <small>Ratings: {recepie.rating} <FaStarHalfAlt color={'orange'} style={{height:'20px',width:'20px'}}></FaStarHalfAlt>
                                </small>
                        </Card.Header>
                        <div className='recepies-img'>
                            <img src={recepie.picture} className="img-fit rounded" />
                        </div>
                        <Card.Body>
                            <Card.Title>Ingredients:</Card.Title>
                            <hr />

                            {
                                recepie.ingredients.map(item => <li><FcDebian></FcDebian> {item}</li>)
                            }

                            <Card.Title className='mt-5'>Cooking Method:</Card.Title><hr />
                            <Card.Text className=''>
                                {recepie.method}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                )}
        </Row>
        </Container >
    );
};

export default Recepies;