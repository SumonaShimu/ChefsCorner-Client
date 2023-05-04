import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { ImUser } from "react-icons/im";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?user.displayName:''}
        </Tooltip>
    );

    return (
        <Navbar className='bg-dark'>
            <Container>
                <Navbar.Brand href="#home" className='d-flex align-items-center'>
                    <img
                        alt=""
                        src="https://raw.githubusercontent.com/SumonaShimu/FoodData/main/logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    <h2 className='text-white fw-bold nav-link'>Muri<span className="text-warning">Ghonto</span></h2>
                </Navbar.Brand>
                <Nav className="d-flex gap-4">
                    <Button variant='warning'><Link to='/' className='links'>Home</Link></Button>
                    <Button variant='warning'><Link to='/blog' className='links'>Blog</Link></Button>
                    {user ?
                        <Button variant='warning' onClick={logOut}>Logout</Button> :
                        <Button variant='warning'><Link to='/login' className='links'>Login</Link></Button>
                    }

                    {user ?
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Button variant="warning" className='rounded-circle'><ImUser color={''} className='icon'></ImUser></Button>
                        </OverlayTrigger> : <></>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;