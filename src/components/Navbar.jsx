import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/SC.png';

function NavigationBar() {
  return (
    <div className='main-navbar'>
      
    <Navbar bg="light" expand="lg">
      <Container className='nav-container'>
      <div>
        <Navbar.Brand href="#home"> <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sage and Cedar</Navbar.Brand>
        
        </div>
        <div><Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Art Therapist</Nav.Link>
          
            <NavDropdown title="Services" id="basic-nav-dropdown">

              <NavDropdown.Item className= "navbar-item"href="#action/3.1">Individual Sessions</NavDropdown.Item>
              <NavDropdown.Item className= "navbar-item"href="#action/3.2">
                Group Sessions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href="#link"className="navbar-item">Contact</Nav.Link>
            <Nav.Link  href="#link"className="navbar-item">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationBar;