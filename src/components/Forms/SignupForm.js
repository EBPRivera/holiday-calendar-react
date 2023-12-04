import _ from "lodash";
import { useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import CTextInput from "../CustomInputs/CTextInput";
import CPasswordInput from "../CustomInputs/CPasswordInput";
import ErrorAlert from "../ErrorAlert";

const INIT_FORM_DATA = {
  username: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

const SignupForm = ({ onError, onSubmit, isLoading, errors }) => {
  const [formData, setFormData] = useState(INIT_FORM_DATA);

  const handleChange = (key, value) => {
    setFormData((credentials) => ({ ...credentials, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (!_.isEqual(password, confirmPassword)) {
      onError(["Password confirmation invalid"]);
      return;
    }

    onSubmit(formData);
  };

  return (
    <Card className="auth-form">
      <Card.Body>
        <Card.Title>
          <h3>Signup</h3>
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <CTextInput
            className="mb-3"
            label="Username"
            onChange={(value) => handleChange("username", value)}
          />
          <CPasswordInput
            className="mb-3"
            label="Password"
            onChange={(value) => handleChange("password", value)}
          />
          <CPasswordInput
            className="mb-3"
            label="Confirm Password"
            onChange={(value) => handleChange("confirmPassword", value)}
          />
          <div className="d-flex flex-row align-items-end">
            <Button disabled={isLoading} type="submit" className="me-3">
              {isLoading ? <Spinner as="span" size="sm" /> : "Submit"}
            </Button>
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </Form>
        {!_.isEmpty(errors) && <ErrorAlert className="mt-3" errors={errors} />}
      </Card.Body>
    </Card>
  );
};

export default SignupForm;
