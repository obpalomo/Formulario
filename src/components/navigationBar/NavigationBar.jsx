import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <NavbarBrand>Films</NavbarBrand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/peliculas" className="nav-link">
                Películas
              </Link>
              <Link to="/contacto" className="nav-link">
                Contact
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <NavDropdown title="Actions" id="basic-nav-dropdown">
                <Link to="/nueva-pelicula" className="dropdown-item">
                  Agregar película
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
