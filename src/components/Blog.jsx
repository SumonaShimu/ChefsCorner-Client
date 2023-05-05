import React, { useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { ImDownload2 } from "react-icons/im";
import Pdf from "react-to-pdf";

const Blog = () => {
    return (
        <Container className='my-5 d-flex flex-column gap-4'>
            <div className='d-flex flexColumn align-items-center'>
                <img src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/left.gif" className='blog-gif' />
                <div>
                    <h1 className='banner-title'>Blogs</h1>
                    <p className='d-block mb-4'>Conveniently imaiipact are worldwide andng datang arovem theme with there. Conveniently imaiipact are worldwide andng datang arovem theme with there.</p>
                    <Pdf targetRef={window.document.body} filename="blogs.pdf">
                        {({ toPdf }) => 
                    <Button variant='warning rounded-pill' className='w-50 d-block'onClick={toPdf}> <ImDownload2></ImDownload2> Download Pdf</Button>}
                    </Pdf>
                </div>

            </div>
            <div className='my-auto bg-dark p-3 rounded'>
                <h3 className='text-warning p-3'>1. What are the differences between uncontrolled and controlled components?</h3>
                <p className='bg-light p-5 rounded'>Uncontrolled components are managed by the DOM while controlled components are managed by React. In uncontrolled components, the form data is handled by the DOM, whereas in controlled components, the form data is handled by React.</p>
            </div>

            <div className='my-auto bg-dark p-3 rounded'>
                <h3 className='text-warning p-3'>2. How to validate React props using PropTypes? </h3>
                <p className='bg-light p-5 rounded'>PropTypes is used to validate the props passed to a React component. It can be imported from the `prop-types` package and used to define the type and shape of the expected props.</p>
            </div>


            <div className='my-auto bg-dark p-3 rounded'>
                <h3 className='text-warning p-3'>3. What is the difference between nodejs and express js.</h3>
                <p className='bg-light p-5 rounded'>Node.js is a JavaScript runtime environment that executes JavaScript code on the server side. Express.js is a framework built on top of Node.js that provides a set of tools for building web applications.</p>
            </div>

            <div className='my-auto bg-dark p-3 rounded'>
                <h3 className='text-warning p-3'>4. What is a custom hook, and why will you create a custom hook?</h3>
                <p className='bg-light p-5 rounded'>A custom hook is a reusable function that contains logic and stateful behavior that can be shared between React components. Custom hooks can simplify the code and avoid duplication of logic in multiple components. Custom hooks can be created to encapsulate complex logic and provide an easy-to-use interface to other components.</p>
            </div>
        </Container>

    );
};

export default Blog;