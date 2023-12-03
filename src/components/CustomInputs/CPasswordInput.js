import _ from "lodash";
import classNames from "classnames";
import { Form } from "react-bootstrap";

const CPasswordInput = ({ className, onChange, value, label }) => {
  return (
    <Form.Group className={classNames(className)}>
      {!_.isEmpty(label) && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default CPasswordInput;
