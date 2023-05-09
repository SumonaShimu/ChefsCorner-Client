import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { FcApproval, FcDebian, FcLike } from "react-icons/fc";
import { GiForkKnifeSpoon, GiNestedHearts } from 'react-icons/gi';
import { SiCodechef } from "react-icons/si";
import Recepe from './Recepe';
import LazyLoad from 'react-lazy-load';
import { AuthContext } from './providers/AuthProvider';


const Recepies = () => {
    const recepies = useLoaderData();
    const chefId = recepies[0].chef_id;
    const { allchefs } = useContext(AuthContext);
    const chefarray = allchefs.filter(item => item.chef_id == chefId);
    console.log('allchefs from context:', allchefs);
    const chef = chefarray[0];
    console.log(chef);
    return (
        <Container className='my-5 mx-auto'>
            <Row xs={1} md={2} className='d-flex align-items-center justify-content-around w-100 bg-dark mb-5 rounded mx-auto'>
                {/* ---------------------chef Image------------------- */}
                <div className='p-3 bg-dark' style={{ width: '400px' }}>
                    <LazyLoad onContentVisible={() => { console.log('Lazy Chef loaded!!') }}>
                        <img src={chef?.picture} className='rounded' style={{ width: '100%' }} />
                    </LazyLoad>
                </div>
                {/* -----------------chef info------------------------- */}
                <Card style={{ border: '0' }} className='bg-dark text-white'>
                    <Card.Body style={{ border: '0' }}>
                        <h2 className='bg-warning p-3 rounded text-dark'>
                            <SiCodechef style={{ fontSize: "100px" }}></SiCodechef>
                            Chef {chef?.name}

                        </h2><hr></hr>
                        <Card.Text>
                            <li><FcApproval></FcApproval> {chef?.experience} years of experience</li>
                            <li><GiForkKnifeSpoon color={'orange'}></GiForkKnifeSpoon> {chef?.recipes} recepies </li>
                            <li><FcLike></FcLike> {chef?.likes} likes</li>
                            <li><span className='fw-bold'>About chef: </span>{chef?.bio}</li>
                        </Card.Text>
                        <p></p>
                    </Card.Body>
                </Card>
            </Row>
            {/*-------------------chefs recepies----------------- */}
            <Row xs={1} md={3} className="g-4">
                {recepies.map(recepie => <Recepe key={recepie.id} recepie={recepie}></Recepe>
                )}
            </Row>
        </Container >
    );
};

export default Recepies;