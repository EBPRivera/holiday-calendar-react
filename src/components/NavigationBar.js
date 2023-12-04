import _ from "lodash";
import { useNavigate } from "react-router";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleNavigate = (e) => {
    navigate(e.target.name);
  };

  const renderAdminLinks = () => {
    if (!_.isEqual(user.role, "Admin")) return;

    return (
      <>
        <Nav.Item>
          <h5>Admin Links</h5>
        </Nav.Item>
        <hr />
        <Nav.Link name="/admin/holidays" onClick={handleNavigate}>
          Holidays CRUD
        </Nav.Link>
      </>
    );
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-secondary side-navigation-bar"
    >
      <Nav className="flex-column text-start">
        {renderAdminLinks()}
        <Nav.Item>
          <h5>Calendar</h5>
        </Nav.Item>
        <hr />
        <Nav.Link name="/calendar" onClick={handleNavigate}>
          Dashboard
        </Nav.Link>
        <Nav.Link name="/calendar/month-view" onClick={handleNavigate}>
          Month View
        </Nav.Link>
        <Nav.Link name="/calendar/holidays" onClick={handleNavigate}>
          Holidays
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
