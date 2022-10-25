import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [Categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setCategories(data))
    }, []);
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="All Category" id="collasible-nav-dropdown">
                            {
                                Categories.map(category => <NavDropdown.Item key={category.id}>
                                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                                    </NavDropdown.Item>)
                            }
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;