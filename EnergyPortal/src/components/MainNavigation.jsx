import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/info">
              Info
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavigation;
