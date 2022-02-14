import React from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Menu from './components/Menu';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import React from 'react';
import { Container, Offcanvas, Nav} from 'react-bootstrap';
import MenuElementos from '../components/MenuElementos';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu Examen
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {MenuElementos.map((item) => {
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