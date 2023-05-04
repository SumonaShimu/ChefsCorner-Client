import React, { useContext } from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Layout = () => {
    const {loading}=useContext(AuthContext);
    return (
        <div>
            <ToastContainer />
            <Header></Header>
            {loading?<h1 className='text-center' style={{position:'absolute',right:'50%'}}><Spinner variant="danger"/></h1>:<></>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;