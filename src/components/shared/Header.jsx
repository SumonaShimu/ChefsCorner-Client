import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='h-10'>
                    <img className="img-fluid" src="" />
                    Navbar
                </Navbar.Brand>
                <Nav className="d-flex gap-4">
                    <Link to='/' className='text-decoration-none'>Home</Link>
                    <Link to='/login' className='text-decoration-none'>Login</Link>
                    <Link to='/blog' className='text-decoration-none'>Blog</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;