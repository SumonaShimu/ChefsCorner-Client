import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div>
            <ToastContainer />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;