import _ from "lodash";
import { useContext } from "react";
import { Container, Row, Col, Spinner, Card, ListGroup } from "react-bootstrap";

import { CalendarContext } from "../config/CalendarRouting";
import getMonthName from "../helpers/getMonthName";

const Holidays = () => {
  const calendarData = useContext(CalendarContext);
  const { holidays } = calendarData;

  const renderHolidaysList = () => {
    if (_.isNull(holidays)) return <Spinner />;

    return (
      <ListGroup variant="flush">
        {_.map(holidays, (holiday, index) => {
          return (
            <ListGroup.Item key={index}>
              <span>
                {holiday.name} -{" "}
                <b>
                  {getMonthName(holiday.month)}, {holiday.day}
                </b>
              </span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Card className="text-start">
            <Card.Body>
              <Card.Title>
                <h3>Holidays List</h3>
              </Card.Title>
              {renderHolidaysList()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Holidays;
