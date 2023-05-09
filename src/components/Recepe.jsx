import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FcDebian } from 'react-icons/fc';
import { GiNestedHearts } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Recepe = ({recepie}) => {
    //button favourite handler
    const [clicked, setClicked] = useState(false);
    
    const handleFavourite=()=>{
        toast.success('Masked as favourite!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setClicked(true);
    }
    return (
        <Col className='recepies-container'>
            <Card className='recepies'>
                <Card.Header className='text-center'>
                    <h4>{recepie.name}</h4>
                    <small>Ratings: {recepie.rating} <FaStarHalfAlt color={'orange'} style={{ height: '20px', width: '20px' }}></FaStarHalfAlt>
                    </small>
                </Card.Header>
                <div className='recepies-img'>
                    <img src={recepie.picture} className="img-fit rounded" />
                </div>
                <Card.Body style={{position:'relative'}}>
                    <Card.Title>Ingredients:</Card.Title>
                    <hr />

                    {
                        recepie.ingredients.map(item => <li><FcDebian></FcDebian> {item}</li>)
                    }

                    <Card.Title className='mt-5'>Cooking Method:</Card.Title><hr />
                    <Card.Text className='d-block pb-4'>
                        {recepie.method}
                    </Card.Text>
                    <Button onClick={handleFavourite} disabled={clicked} variant='warning' className='w-100' style={{ fontSize: '20px', position:'absolute', bottom:'0',left:'50%', transform: 'translateX(-50%)' }}>Mask as Favourite <GiNestedHearts />
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recepe;