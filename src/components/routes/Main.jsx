import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner';
import Aboutus from '../Aboutus';
import Chefcards from '../Chefcards';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mainBg'>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Chefcards></Chefcards>
        </div>
    );
};

export default Main;