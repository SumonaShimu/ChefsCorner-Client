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
        const from = location.state?.from?.pathname || '/';
        console.log('login page location', location)
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                console.log(loggedUser);
                setError('');
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
    const handleGithubLogin = () => {
        const from = location.state?.from?.pathname || '/';
        signInGithub()
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                const loggedUser = res.user;
                setUser(loggedUser)
                toast.success('Github Signin successful')
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err.message))
    }

    const handleGoogleLogin = () => {
        const from = location.state?.from?.pathname || '/'
        signInGoogle()
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                const loggedUser = res.user;
                setUser(loggedUser)
                toast.success('Google Signin successful')
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className='loginbg'>
        <Row className='bggrey w-100 m-0'>

            <Col lg={6} md={12}>
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
                    <Button variant="outline-warning" onClick={handleGoogleLogin} className='w-100 rounded-pill px-5 my-3 mx-auto d-block'> Login with Google </Button>

                    <Button variant="outline-warning" onClick={handleGithubLogin} className='w-100 rounded-pill px-5 mx-auto d-block'> Login with GitHub</Button>

                </Form>
            </Col>
            <Col lg={5} md={12} className='d-flex p-5'>
            <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/eat.gif" className="gif m-5 p-5 w-100 h-100" />
            </Col>
        </Row>
        </div>
    );
};

export default Login;