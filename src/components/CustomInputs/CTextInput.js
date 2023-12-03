import _ from "lodash";
import classNames from "classnames";
import { Form } from "react-bootstrap";

const CTextInput = ({ className, onChange, value, label }) => {
  return (
    <Form.Group className={classNames(className)}>
      {!_.isEmpty(label) && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default CTextInput;
