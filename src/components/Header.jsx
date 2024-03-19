import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const cartProducts = useSelector(state => state.cart)

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand href="#home">Redux-Product</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to={'/'} style={{ textDecoration: 'none' }}><Nav.Link href="#home">Products</Nav.Link></Link>
                            <Navbar.Collapse>
                                <Link to={'/cart'} style={{ textDecoration: 'none' }}><Nav.Link href="#link">Cart <span className='text-danger'>{cartProducts.length}</span></Nav.Link></Link>
                            </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header