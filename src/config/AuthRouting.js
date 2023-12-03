import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import CalendarRouting from "./CalendarRouting";
import Landing from "../containers/Landing";

const AuthRouting = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.token == null) {
      navigate("/login");
    }
  });

  const renderRouting = () => {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/calendar/*" element={<CalendarRouting />} />
      </Routes>
    );
  };

  return (
    <div className="auth-page">
      <Header />
      <Container className="mx-0 main-page-container" fluid>
        <Row className="flex-grow-1">
          <Col sm={2} className="px-0">
            <NavigationBar />
          </Col>
          <Col sm={10} className="page-content">
            {renderRouting()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthRouting;
