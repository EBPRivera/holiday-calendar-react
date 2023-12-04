import { useState } from "react";
import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import classNames from "classnames";

import CMonthDayPicker from "./CMonthDayPicker";
import CountryPicker from "./CountryPicker";
import _ from "lodash";

const CURRENT_DATE = new Date();

const INIT_FORM_DATA = {
  name: "",
  month: CURRENT_DATE.getMonth() + 1,
  day: CURRENT_DATE.getDate(),
  year: null,
  countryId: 0,
};

const HolidayForm = ({ className, onSubmit, countries, isLoading }) => {
  const [formData, setFormData] = useState(INIT_FORM_DATA);
  const [date, setDate] = useState(CURRENT_DATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleDateChanged = (date) => {
    setDate(date);
    setFormData((formData) => ({
      ...formData,
      month: date.getMonth() + 1,
      day: date.getDate(),
    }));
  };

  const handleChange = (key, value) => {
    setFormData((formData) => ({ ...formData, [key]: value }));
  };

  return (
    <Form className={classNames(className)} onSubmit={handleSubmit}>
      <Form.Group>
        <Container>
          <Row className="mb-3">
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={8}>
              <CMonthDayPicker selected={date} onSelect={handleDateChanged} />
            </Col>
            <Col sm={4}>
              <Form.Label>Year</Form.Label>
              <Form.Control
                placeholder="Leave empty for repeating holidays"
                className="mb-3"
                type="number"
                value={formData.year || ""}
                onChange={(e) => handleChange("year", e.target.value)}
              />
              <Button
                className="mb-3"
                variant="secondary"
                onClick={() => handleChange("year", null)}
              >
                Clear Year
              </Button>
            </Col>
          </Row>
          <Row className="align-items-end">
            <Col sm={8}>
              {_.isNull(countries) ? (
                <Spinner />
              ) : (
                <CountryPicker
                  countryId={formData.countryId}
                  countries={countries}
                  onChange={(e) => handleChange("countryId", e.target.value)}
                />
              )}
            </Col>
            <Col sm={4}>
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? <Spinner as="span" size="sm" /> : "Submit"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Form.Group>
    </Form>
  );
};

export default HolidayForm;
