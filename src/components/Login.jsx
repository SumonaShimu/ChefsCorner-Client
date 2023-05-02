import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} md={8} className='mx-auto'>
                    <Form className='my-5 p-5 rounded' style={{
                        backgroundColor:'#f8f9fa'
                    }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h2 className='text-center py-4'>Please Login!</h2>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit" className='rounded-pill px-5 mx-auto d-block'>
                            Login
                        </Button>
                        <br />
                        <small className='d-block text-center'>
                            New to this website? Please <Link to='/register'>Register</Link>
                        </small>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;