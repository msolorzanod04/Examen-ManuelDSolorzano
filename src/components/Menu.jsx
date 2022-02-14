import React from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Menu from './components/Menu';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import React from 'react';
import { Container, Offcanvas, Nav, MenuElements } from 'react-bootstrap';
import MenuElements from '../components/MenuElements';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {MenuElements.map((item) => {
                    return (
                      <Nav.Link key={uuid()} as={Link} to={item.path}>
                        {item.title}
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
    );
}
}
export default Menu;