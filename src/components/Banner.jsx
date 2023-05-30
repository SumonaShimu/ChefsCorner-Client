import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner-container d-flex align-items-center justify-content-center">
            <div className="banner-text w-50 d-block">
                <h4 className='text-warning'>Welcome to <span className='text-dark'>Chefs</span>Corner</h4>
                <h1 className='banner-title'>Get the recepies <br></br>Make The Food You Love</h1>
                <p >Welcome to ChefsCorner, your one-stop destination for exploring the rich and diverse culinary food culture of Bangladesh!</p>
                <Button variant="outline-warning">Get Satrted</Button>
                <Button variant="warning" className='m-3'>Whats New Today?</Button>
            </div>
        </div>
    );
};

export default Banner;