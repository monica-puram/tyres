import React from 'react';
import {Navbar, Nav, Dropdown, Button, ButtonGroup} from 'react-bootstrap';
import { IoIosHome } from 'react-icons/io';
import "../css/headerNav.css";

class HeaderNav extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		console.log(e.target.href);	
	}
	render(){ 
		return(
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					  		<Navbar.Brand href="../Home">SM Tyres</Navbar.Brand>
							  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
							  <Navbar.Collapse id="responsive-navbar-nav">
							    <Nav className="mr-auto">
							      <Nav.Link href="../Home">Home <IoIosHome/></Nav.Link>
							      <Dropdown as={ButtonGroup}  >
								    <Button as = "a" className = "dropdown" href = "../Products">Products</Button>
								    <Dropdown.Toggle className = "dropdown" split id="dropdown-custom-2" />
								    <Dropdown.Menu>
								      <Dropdown.Item eventKey="1">2 Wheeler</Dropdown.Item>
								      <Dropdown.Divider />
								      <Dropdown.Item eventKey="2">3 Wheeler</Dropdown.Item>
								      <Dropdown.Divider />
								      <Dropdown.Item eventKey="3">4 Wheeler</Dropdown.Item>
								    </Dropdown.Menu>
								  </Dropdown>
							      <Nav.Link href="../About">About</Nav.Link>
							      <Nav.Link href="../About">Contact Us</Nav.Link>
							    </Nav>
							  </Navbar.Collapse>
					  	
					</Navbar>
				
			)
	}
}

export default HeaderNav;