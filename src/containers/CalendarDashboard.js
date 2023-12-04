import { Card, Container, Row, Col } from "react-bootstrap";

const CalendarDashboard = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <h3>Welcome to WPH Calendar</h3>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarDashboard;
