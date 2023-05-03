import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error,setError]=useState('')
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.pass.value;
        const password2 = form.pass2.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                form.reset();
                toast.success("Reg successfull");
            })
            .catch(error => {
                const msg=error.message;
                setError(msg)
            })
    }
    return (
        <Container>
            
            <Row>
            
                <Col lg={4} md={8} className='mx-auto'>
                    <Form onSubmit={handleRegister} className='my-5 p-5 rounded' style={{
                        backgroundColor: '#f8f9fa'
                    }}>
                        {error?<h6 className='text-danger text-center p-3 rounded'> {error} </h6> :''}
                        <h2 className='text-center py-4'>Please Register!</h2>
                        
                        {/* User name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="Text" name="name" placeholder="Your Name" />

                        </Form.Group>

                        {/* email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="info@gmail.com" />

                        </Form.Group>

                        {/* Password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="pass" placeholder="Password" />
                        </Form.Group>
                        {/*Confirm Password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="pass2" placeholder="Password" />
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