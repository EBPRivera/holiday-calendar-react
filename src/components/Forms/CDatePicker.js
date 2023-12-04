import _ from "lodash";
import { Form } from "react-bootstrap";
import classNames from "classnames";

import formatForDatePicker from "../../helpers/formatForDatePicker";

const CDatePicker = ({ className, value, onChange, label = null }) => {
  return (
    <Form.Group className={classNames(className)}>
      {!_.isNull(label) && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type="date"
        value={formatForDatePicker(value)}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default CDatePicker;
