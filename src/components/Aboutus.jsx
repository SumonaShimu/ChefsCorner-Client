import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const Aboutus = () => {
    return (
        <Container className='aboutus my-5 py-5'>
            <div className='d-flex flexColumn flexColumn mx-auto my-auto'>
                <div className='my-auto card-container'>
                    <Row sm={2} className="mt-5 card-container">
                        <Col className='about-card smaller' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/9.jpg " className='img-fit rounded' />
                        </Col>
                        <Col className='about-card smaller' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/20.jpg" className='img-fit rounded' />
                        </Col>
                        <Col className='about-card smaller' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/22.jpg" className='img-fit rounded' />
                        </Col>
                        <Col className='about-card smaller' >
                            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/recepies/4.jpeg" className='img-fit rounded' />
                        </Col>

                    </Row>
                </div>
                <div className='my-auto text-justify p-5'>
                    <h1 className='banner-title py-5'>About Us</h1>
                    <p>Muri<span className='text-warning'>Ghonto</span> is dedicated to showcasing the mouthwatering and authentic traditional recipes of Bangladeshi cuisine, which are a true reflection of the country's history, culture, and geographical diversity. From the savory flavors of fish and meat dishes to the aromatic spices and herbs used in vegetarian preparations, our website offers a treasure trove of recipes that are guaranteed to tantalize your taste buds. Whether you are a food enthusiast or simply curious about the exotic flavors of Bangladesh, MuriGhonto is the perfect place for you to discover and explore the world of Bangladeshi cuisine.<br /><br />

                        Our website features an extensive collection of special recipes of the best chefs that are easy to follow, and our step-by-step instructions make it easy for you to recreate these delicious dishes in your own kitchen.</p>
                    <Button variant="warning" className='my-3'>Contact Us</Button>
                </div>
            </div>
        </Container>
    );
};

export default Aboutus;