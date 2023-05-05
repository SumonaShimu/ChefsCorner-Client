import React from 'react';
import { Container } from 'react-bootstrap';
import { SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
const Footer = () => {
    return (
        <div className='bg-dark' style={{fontSize:'30px'}}>
        <Container className='d-flex flexColumn justify-content-between align-items-center p-4 w-100 text-white'>
            <h6>&copy;2023 MuriGhonto. All Rights Reserved</h6>
            <div>
            <div className='d-flex gap-2 text-center'>
            <SlSocialYoutube></SlSocialYoutube>
            <SlSocialYoutube></SlSocialYoutube>
            <SlSocialTwitter></SlSocialTwitter>
            <SlSocialInstagram></SlSocialInstagram>
            </div>
            <h6 className='text-center'>Connect with us</h6>
            </div>
        </Container>
        </div>
    );
};

export default Footer;