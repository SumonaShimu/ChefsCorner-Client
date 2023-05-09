import React, { useContext } from 'react';
import Header from '../shared/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Layout = () => {
    const { setAllchefs } = useContext(AuthContext);
    const chefs = useLoaderData();
    setAllchefs(chefs);
    console.log(chefs)
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