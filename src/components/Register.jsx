import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, setUser, updateUserName } = useContext(AuthContext);
    const [error, setError] = useState('')
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.pass.value;
        const password2 = form.pass2.value;

        if (password !== password2) toast.error("Please retype the same password!");
        else if (password.length < 6) toast.error("Password must contain at least 6 letters.");
        else {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser);
                    setUser(createdUser);
                    setError('');
                    form.reset();
                    if(name) updateUserName(name);
                    toast.success("Reg successfull");
                })
                .catch(error => {
                    const msg = error.message;
                    setError(msg)
                })
        }
    }
    return (
     

            <Row className='regBody'>

                <Col lg={4} md={8} className='mx-auto text-warning'>
                    <Form onSubmit={handleRegister} className='my-5 p-5 rounded bgReg'>
                        {error ? <h6 className='text-danger text-center p-3 rounded'> {error} </h6> : ''}
                        <h2 className='text-center py-4'>Please Register!</h2>

                        {/* User name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="Text" name="name" placeholder="Your Name" />
                        </Form.Group>

                        {/* email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="info@gmail.com" required />

                        </Form.Group>

                        {/* Password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="pass" placeholder="Password" required />
                        </Form.Group>
                        {/*Confirm Password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="pass2" placeholder="Confirm Password" required />
                        </Form.Group>

                        <Button variant="outline-warning" type="submit" className='rounded-pill px-5 mx-auto d-block'>
                            Register
                        </Button>
                        <br />
                        <small className='d-block text-center'>
                            Already have an account? Please <Link to='/login'>Login</Link>
                        </small>
                    </Form>
                </Col>
            </Row>
     
    );
};

export default Register;