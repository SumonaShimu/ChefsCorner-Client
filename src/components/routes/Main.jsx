import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner';
import Aboutus from '../Aboutus';
import Chefcards from '../Chefcards';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Chefcards></Chefcards>
        </div>
    );
};

export default Main;