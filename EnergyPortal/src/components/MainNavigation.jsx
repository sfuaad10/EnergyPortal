import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../stores/AuthContext";

import { Link } from "react-router-dom";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/info">
              Info
            </Nav.Link>
          </Nav>
        </Container>
        <Button variant="light" onClick={authCtx.onLogout}>
          Logout
        </Button>
      </Navbar>
    </>
  );
};

export default MainNavigation;
