import { Container, Navbar, NavbarBrand, Nav, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <NavbarBrand>Films</NavbarBrand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/peliculas">Películas</Nav.Link>
              <Nav.Link href="/contacto">Contact</Nav.Link>
              <NavDropdown title="Actions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/nueva-pelicula">Agregar Película</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
