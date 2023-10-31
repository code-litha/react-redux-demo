import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="mx-1">
        <Navbar.Brand>REDUX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item className="mx-2">
              <NavLink
                to={"/"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                    textDecoration: "none",
                  };
                }}
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <NavLink
                to="/movies"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "red" : "black",
                    textDecoration: "none",
                  };
                }}
              >
                Movies
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
