import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';

const Aboutus = () => {
    return (
        <Container className='about ' style={{height:'90vh'}}>
            <div className='my-auto'>
                <h1 className='banner-title py-5'>About Us</h1>
                <p>Conveniently imaiipact are worldwide and datang arovem theme with there. Conveniently imaiipact are worldwide.Conveniently imaiipact are worldwide and datang arovem theme with there. Conveniently imaiipact are worldwide.</p>
                <Button variant="warning">Contact Us</Button>
            </div>
            <div className='my-auto ' style={{height:'100%',width:'100%'}}>
            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/pan.jpg" className='img-fit'/>
            </div>
            
        </Container>
    );
};

export default Aboutus;