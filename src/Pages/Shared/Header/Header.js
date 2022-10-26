import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error(error))
    }

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
                        <Nav.Link href="/">
                            {user?.uid?
                                <>
                                    <span className='text-success me-3 fw-semibold'>{user?.displayName}</span>
                                    <Button variant="warning" size='sm' onClick={handleLogOut}>Logout</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/">
                            {user?.photoURL ?
                                <Image
                                    roundedCircle
                                    className='me-2'
                                    src={user?.photoURL}
                                    style={{height: '35px', width: '35px'}}
                                ></Image>
                                :
                                <FaUserCircle></FaUserCircle>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;