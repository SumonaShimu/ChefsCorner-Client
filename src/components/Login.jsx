import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn, setUser, setLoading, signInGithub, signInGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    // sign in with email password___________________________
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log('login page location', location)
        const from = location.state?.from?.pathname || '/'

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                setUser(loggedUser)
                navigate(from, { replace: true })
                setLoading(false);
                form.reset();
                toast.success("Login successful");
            })
            .catch(error => {
                setLoading(false);
                const msg = error.message;
                setError(msg)
            })
    }

    return (
        <Row className='loginbg'>

            <Col lg={5} md={7}>
                <Form onSubmit={handleLogin} className='px-10 my-5 p-5 rounded bggrey text-warning'>
                    {error ? <h6 className='text-danger text-center p-3 rounded'> {error} </h6> : ''}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h2 className='text-center py-4'>Please Login!</h2>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="outline-warning" type="submit" className='rounded-pill px-5 mx-auto d-block'> Login </Button>
                    <br />
                    <small className='d-block text-center'>
                        New to this website? Please <Link to='/register'>Register</Link>
                    </small>
                    <br />
                    <Button variant="outline-warning" onClick={signInGoogle} className='w-100 rounded-pill px-5 my-3 mx-auto d-block'> Login with Google </Button>

                    <Button variant="outline-warning" onClick={signInGithub} className='w-100 rounded-pill px-5 mx-auto d-block'> Login with GitHub</Button>

                </Form>
            </Col>

        </Row>

    );
};

export default Login;