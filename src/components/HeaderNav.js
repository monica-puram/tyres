import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { IoIosHome } from 'react-icons/io';
import {Container, Row, Col} from 'react-bootstrap';
import "../css/headerNav.css";

class HeaderNav extends React.Component{
	render(){ 
		return(
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						
					  		<Navbar.Brand href="../Home">SM Tyres</Navbar.Brand>
					  	
							  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
							  <Navbar.Collapse id="responsive-navbar-nav">
							    <Nav className="mr-auto">
							      <Nav.Link href="../Home">Home <IoIosHome/></Nav.Link>
							      <NavDropdown as = {Nav.Link} href = "../products" title="Products" className = "dropdown">
								    <div class = "dropdownMenu">  
								        <NavDropdown.Item href="#action/3.1">2 Wheeler</NavDropdown.Item>
								        <NavDropdown.Divider/>
								        <NavDropdown.Item href="#action/3.2">3 wheeler</NavDropdown.Item>
								        <NavDropdown.Divider/>
								        <NavDropdown.Item href="#action/3.3">4 wheeler</NavDropdown.Item>
								    </div>   
							      </NavDropdown>
							      <Nav.Link href="../About">About</Nav.Link>
							      <Nav.Link href="../About">Contact Us</Nav.Link>
							    </Nav>
							  </Navbar.Collapse>
					  	
					</Navbar>
				
			)
	}
}

export default HeaderNav;