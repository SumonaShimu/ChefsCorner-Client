import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='bgred'>
            <Container>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <h2 className='d-inline-block fw-bold'>MuriGhonto</h2>
          </Navbar.Brand>
                <Nav className="d-flex gap-4">
                    <Link to='/' className='links'>Home</Link>
                    <Link to='/login' className='links'>Login</Link>
                    <Link to='/blog' className='links'>Blog</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;