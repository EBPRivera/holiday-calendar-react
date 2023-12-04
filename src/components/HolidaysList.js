import _ from "lodash";
import { Card, Spinner, ListGroup } from "react-bootstrap";

import getMonthName from "../helpers/getMonthName";

const HolidaysList = ({ holidays, label = "Holidays List" }) => {
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
    <Card className="text-start">
      <Card.Body>
        <Card.Title>
          <h3>{label}</h3>
        </Card.Title>
        {renderHolidaysList()}
      </Card.Body>
    </Card>
  );
};

export default HolidaysList;
