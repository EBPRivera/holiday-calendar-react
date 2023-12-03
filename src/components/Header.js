import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";

import { logout } from "../features/user";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(logout());
    navigate(e.target.name);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-secondary header-nav"
    >
      <Container>
        <Navbar.Brand>WPH Holiday Calendar</Navbar.Brand>
        <Navbar.Toggle />
        <Nav>
          <Nav.Link name="/login" onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
