import _ from "lodash";
import { useContext, useState, createContext } from "react";
import { Container, Row, Col, Card, Spinner, Form } from "react-bootstrap";

import useAxiosInstance from "../hooks/useAxiosInstance";
import { CalendarContext } from "../config/CalendarRouting";
import Calendar from "../components/Calendar";
import HolidaysList from "../components/HolidaysList";
import CMonthYearPicker from "../components/Forms/CMonthYearPicker";
import generateCalendarWeekDays2DArray from "../helpers/generateCalendarDays";

const DEFAULT_DATE = new Date();

const CountryHolidayContext = createContext({ countryHolidays: [] });

const CalendarMonthView = () => {
  const { countries } = useContext(CalendarContext);
  const [country, setCountry] = useState(0);
  const [countryHolidays, setCountryHolidays] = useState([]);
  const [date, setDate] = useState(DEFAULT_DATE);
  const [calendarDays, setCalendarDays] = useState(
    generateCalendarWeekDays2DArray(date)
  );
  const axiosInstance = useAxiosInstance();

  const handleChangeCountry = (e) => {
    e.preventDefault();

    setCountry(e.target.value);
    fetchCountryHolidays(e.target.value);
  };

  const fetchCountryHolidays = async (countryId) => {
    await axiosInstance
      .get(`/countries/${countryId}/holidays`)
      .then(({ data }) => {
        setCountryHolidays(data);
      });
  };

  const filteredHolidays = () => {
    return _.filter(countryHolidays, ({ year }) => {
      return year === date.getFullYear() || _.isNull(year);
    });
  };

  const renderCountryDropDown = () => {
    if (_.isNull(countries)) return <Spinner />;
    if (_.isEmpty(countries)) {
      return <div>No data found</div>;
    }

    return (
      <Form.Group>
        <Form.Label>Select Country</Form.Label>
        <Form.Select
          aria-label="Country dropdown"
          onChange={handleChangeCountry}
          value={country}
        >
          <option value={0} disabled>
            Select Country
          </option>
          {_.map(countries, (country, index) => {
            return (
              <option value={country.id} key={index}>
                {country.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    );
  };

  const handleDateChange = (date) => {
    setDate(date);
    setCalendarDays(generateCalendarWeekDays2DArray(date));
  };

  return (
    <CountryHolidayContext.Provider value={{ countryHolidays }}>
      <Container className="mt-3" fluid>
        <Row className="mb-3">
          <Col className="text-start">
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>Month View</h3>
                </Card.Title>
                <div className="d-flex flex-column w-25">
                  <CMonthYearPicker
                    className="mb-3"
                    onChange={handleDateChange}
                  />
                  {renderCountryDropDown()}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Calendar
              date={date}
              calendarDays={calendarDays}
              holidays={countryHolidays}
            />
          </Col>
          <Col sm={4}>
            <HolidaysList
              holidays={filteredHolidays()}
              label={`Holidays for the Year ${date.getFullYear()}`}
            />
          </Col>
        </Row>
      </Container>
    </CountryHolidayContext.Provider>
  );
};

export default CalendarMonthView;
