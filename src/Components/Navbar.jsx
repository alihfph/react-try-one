import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';


class Mynavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">History</Nav.Link>
      <Nav.Link href="#pricing">Fantacy</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Registration</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Store Location
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
      
    );
  }
}

export default Mynavbar