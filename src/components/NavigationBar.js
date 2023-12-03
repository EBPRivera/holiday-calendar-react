import { useNavigate } from "react-router";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    navigate(e.target.name);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link name="/home" onClick={handleNavigate}>
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link>Signup</Nav.Link>
          <Nav.Link name="/login" onClick={handleNavigate}>
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
