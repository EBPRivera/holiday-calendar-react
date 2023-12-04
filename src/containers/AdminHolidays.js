import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import AdminHolidaysList from "../components/AdminHolidaysList";
import { AdminContext } from "../config/AdminRouting";

const AdminHolidays = () => {
  const adminData = useContext(AdminContext);
  const { holidays } = adminData;

  return (
    <Container className="mt-3">
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <h3>Holidays Crud</h3>
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
