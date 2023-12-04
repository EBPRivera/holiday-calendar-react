import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CalendarContext } from "../config/CalendarRouting";
import HolidaysList from "../components/HolidaysList";

const Holidays = () => {
  const calendarData = useContext(CalendarContext);
  const { holidays } = calendarData;

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <HolidaysList holidays={holidays} />
        </Col>
      </Row>
    </Container>
  );
};

export default Holidays;
