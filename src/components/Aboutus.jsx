import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const Aboutus = () => {
    return (
        <Container className='aboutus my-5 py-5'>
            <div className='d-flex flexColumn flexColumn mx-auto my-auto'>
                <div className='my-auto card-container'>
                    <Row sm={2} className="mt-5 card-container">
                        <Col className='about-card' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/9.jpg " className='img-fit rounded' />
                        </Col>
                        <Col className='about-card' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/20.jpg" className='img-fit rounded' />
                        </Col>
                        <Col className='about-card' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/22.jpg" className='img-fit rounded' />
                        </Col>
                        <Col className='about-card' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/4.jpeg" className='img-fit rounded' />
                        </Col>

                    </Row>
                </div>
                <div className='my-auto text-justify p-5'>
                    <h1 className='banner-title py-3'>About Us</h1>
                    <p>Bangladeshi cuisine are worldwide andng datang arovem theme with there.Conveniently imaiipact are worldwide andng datang arovem theme with there. Conveniently imaiipact are worldwide andng datang. Conveniently imaiipact are worldwide andng datang arovem theme with there.Conveniently imaiipact are worldwide andng datang arovem theme with there.Conveniently imaiipact are worldwide andng datang</p>
                    <Button variant="warning" className='my-3'>Contact Us</Button>
                </div>
            </div>
        </Container>
    );
};

export default Aboutus;