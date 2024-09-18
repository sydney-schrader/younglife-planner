import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NWLogo from '../assets/NWLogo.png'

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="custom-navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/club">Club</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav>
          <Nav.Link href="/">
          <img
            src={NWLogo}
            width="100"
            height="45"
            className="d-inline-block align-top"
            alt="Home"
          />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;