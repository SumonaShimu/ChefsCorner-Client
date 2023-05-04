import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { FcApproval, FcDebian, FcLike } from "react-icons/fc";
import { FaRegGrinHearts, FaStarHalfAlt } from "react-icons/fa";
import { GiForkKnifeSpoon, GiNestedHearts } from 'react-icons/gi';
import { SiCodechef } from "react-icons/si";
import { toast } from 'react-toastify';
import Recepe from './Recepe';
const Recepies = (props) => {
    const recepies = useLoaderData();
    const chefId = recepies[0].chef_id;
    const [chefs, setChefs] = useState([]);
    const [chef, setChef] = useState(null);
    // load chef information
    fetch('https://project-murighonto-server-sumonashimu.vercel.app/chefs')
        .then(response => response.json())
        .then(data => {
            setChefs(data)
        })
        .catch(error => console.log(error));
    const chefarray = chefs.filter(item => item.chef_id == chefId);
    const newchef=chefarray[0];
    useEffect(()=>{
        setChef(newchef)
    },[newchef]);
    
    return (
        <Container className='my-5'>
            <Row xs={1} md={2} className='d-flex align-items-center justify-content-around w-100 bg-dark mb-5 rounded'>
                <div className='p-3 bg-dark' style={{width:'300px'}}>
                    <img src={chef?.picture}className='rounded' style={{width:'100%'}}/>
                </div>
                <Card style={{border:'0'}} className='bg-dark text-white'>
                    <Card.Body style={{border:'0'}}>
                    <h2 className='bg-warning p-3 rounded text-dark'>
                    <SiCodechef style={{fontSize:"100px"}}></SiCodechef>
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
            

            <Row xs={1} md={3} className="g-4">
                {recepies.map(recepie =><Recepe key={recepie.id} recepie={recepie}></Recepe>
                )}
            </Row>
        </Container >
    );
};

export default Recepies;