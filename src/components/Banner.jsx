import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner-container d-flex align-items-center justify-content-center">
            <div className="banner-text w-50 d-block">
                <h4 className='text-warning'>Welcome to MuriGhonto</h4>
                <h1 className='banner-title'>Get the recepies <br></br>Make The Food You Love</h1>
                <p >Conveniently imaiipact are worldwide andng datang arovem theme with there.Conveniently imaiipact are worldwide andng datang arovem theme with there.Conveniently imaiipact are worldwide andng datang arovem theme with there</p>
                <Button variant="outline-warning">Get Satrted</Button>
                <Button variant="warning" className='m-3'>Whats New Today?</Button>
            </div>
        </div>
    );
};

export default Banner;