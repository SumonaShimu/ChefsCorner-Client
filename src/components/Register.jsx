import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} md={8} className='mx-auto'>
                    <Form className='my-5 p-5 rounded' style={{
                        backgroundColor: '#f8f9fa'
                    }}>
                        <h2 className='text-center py-4'>Please Register!</h2>
                        {/* User name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="Text" placeholder="Your Name" />

                        </Form.Group>

                        {/* email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="info@gmail.com" />

                        </Form.Group>

                        {/* Password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/*Confirm Password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="outline-dark" type="submit" className='rounded-pill px-5 mx-auto d-block'>
                            Register
                        </Button>
                        <br />
                        <small className='d-block text-center'>
                            Already have an account? Please <Link to='/login'>Login</Link>
                        </small>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;