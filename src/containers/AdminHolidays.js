import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import AdminHolidaysList from "../components/AdminHolidaysList";
import { AdminContext } from "../config/AdminRouting";

const AdminHolidays = () => {
  const adminData = useContext(AdminContext);
  const { holidays } = adminData;

  return (
    <Container className="mt-3">
      <Row className="mb-3">
        <Col className="text-start">
          <Card>
            <Card.Body>
              <Card.Title className="d-flex align-items-end">
                <h3 className="me-3 mb-0">Holidays Crud</h3>
                <Link to="./create">
                  <Button variant="success">Create Holiday</Button>
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <AdminHolidaysList holidays={holidays} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHolidays;
