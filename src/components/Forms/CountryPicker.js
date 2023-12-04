import _ from "lodash";
import { Form } from "react-bootstrap";

const CountryPicker = ({ onChange, countryId, countries }) => {
  return (
    <Form.Group>
      <Form.Label>Select Country</Form.Label>
      <Form.Select
        aria-label="Country dropdown"
        onChange={onChange}
        value={countryId}
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

export default CountryPicker;
