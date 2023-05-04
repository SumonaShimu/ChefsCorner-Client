import React, { useContext } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Banner from '../Banner';
import Aboutus from '../Aboutus';
import Chefcards from '../Chefcards';

import Popular from '../Popular';
import { AuthContext } from '../providers/AuthProvider';

const Main = () => {
    return (
        <div className='mainBg'>
            <Banner></Banner>
            <Aboutus></Aboutus>
            <Chefcards></Chefcards>
            <Popular></Popular>
        </div>
    );
};

export default Main;