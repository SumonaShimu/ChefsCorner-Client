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
        <Navbar className='bg-dark text-white'>
            <Container>
                <Navbar.Brand href="#home" className='d-flex align-items-center'>
                    <img
                        alt=""
                        src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top" />
                    <h2 className='text-white fw-bold nav-link'>Muri<span className="text-warning">Ghonto</span></h2>
                </Navbar.Brand>
                <Nav variant="pills" colo defaultActiveKey="/" className="d-flex gap-4">
                <Nav.Item><Nav.Link eventKey="link-3"><Link to='/' eventKey="link-3" className='links'>Home</Link> </Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link eventKey="link-1"><Link to='/blog' eventKey="link-1" className='links'>Blog</Link> </Nav.Link> </Nav.Item>
                    {user ?
                        <Nav.Item><Button variant='outline-info' onClick={logOut}>Logout</Button></Nav.Item> :
                        <Nav.Item><Nav.Link eventKey="link-2"><Link to='/login' eventKey="link-2" className='links'>Login</Link> </Nav.Link> </Nav.Item>
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