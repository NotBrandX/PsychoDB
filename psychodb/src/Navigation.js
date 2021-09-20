import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect bg='warning' variant='light' expand='md'>
			<Navbar.Brand as={Link} to='/home'>
				<img src='https://i.imgur.com/6RkNOy4.png'></img>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link as={Link} to='/home'>
						Home
					</Nav.Link>
					<Nav.Link as={Link} to='/characters'>
						Characters
					</Nav.Link>
					<Nav.Link as={Link} to='/psipowers'>
						PSI-Powers
					</Nav.Link>
					<Nav.Link as={Link} to='/search'>
						Search
					</Nav.Link>
					<Nav.Link as={Link} to='/about'>
						About
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
