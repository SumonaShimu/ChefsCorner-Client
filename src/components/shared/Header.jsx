import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { ImUser } from "react-icons/im";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user ? user.displayName : ''}
        </Tooltip>
    );

    return (
        <Navbar expand="sm" className='bg-dark text-white'>
            <Container fluid="xl" className='flexColumn' >
                <Navbar.Brand href="/" className='d-flex  align-items-center'>
                    <img
                        alt=""
                        src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/cc.png"
                        width="200"
                        height="70"
                        className="d-inline-block align-top" />
                </Navbar.Brand>
                <Nav variant="pills" defaultActiveKey="/" className="d-flex gap-2 text-center">
                <Nav.Item><Nav.Link eventKey="link-1"><Link to='/' eventKey="link-1" className='links'>Home</Link> </Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link eventKey="link-2"><Link to='/blog' eventKey="link-2" className='links'>Blog</Link> </Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link eventKey="link-3"><Link to='/recepies' eventKey="link-3" className='links'>Recepies</Link> </Nav.Link> </Nav.Item>
                    {user ?
                        <Nav.Item><Button variant='outline-info' onClick={logOut}>Logout</Button></Nav.Item> :
                        <Nav.Item><Nav.Link eventKey="link-4"><Link to='/login' eventKey="link-4" className='links'>Login</Link> </Nav.Link> </Nav.Item>
                    }
                    {user ?
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Nav.Item><Button variant="info" className='rounded-circle'><ImUser color={''} className='icon'></ImUser></Button></Nav.Item>
                        </OverlayTrigger> : <></>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;