import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from './providers/AuthProvider';
import Recepe from './Recepe';
import { Container, Row } from 'react-bootstrap';

const AllRecepies = () => {
    const [allrecepies, setAllrecepies] = useState([])
    const {setLoading}=useContext(AuthContext)
    setLoading(true);
    useEffect(() => {
        fetch("https://project-murighonto-server-sumonashimu.vercel.app/recepies")
            .then(res => res.json())
            .then(data => setAllrecepies(data))
    }, [allrecepies]);

    setLoading(false);
    console.log(allrecepies)
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {allrecepies.map(recepie => <Recepe key={recepie.id} recepie={recepie}></Recepe>
                )}
            </Row>
        </Container>
    );
};

export default AllRecepies;