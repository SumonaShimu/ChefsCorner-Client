import React from 'react';
import { SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
const Footer = () => {
    return (
        <div className='d-flex justify-content-between align-items-center p-4 w-100 bg-dark text-white'>
            <h6>&copy;2023 MuriGhonto. All Rights Reserved</h6>
            <div>
            <div className='d-flex gap-2'>
            <SlSocialYoutube></SlSocialYoutube>
            <SlSocialYoutube></SlSocialYoutube>
            <SlSocialTwitter></SlSocialTwitter>
            <SlSocialInstagram></SlSocialInstagram>
            </div>
            <h6>Connect with us</h6>
            </div>
        </div>
    );
};

export default Footer;