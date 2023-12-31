import _ from "lodash";
import { useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import CTextInput from "../CustomInputs/CTextInput";
import CPasswordInput from "../CustomInputs/CPasswordInput";
import ErrorAlert from "../ErrorAlert";

const DEFAULT_CREDENTIALS = {
  username: "",
  password: "",
};

const LoginForm = ({ onSubmit, isLoading, errors }) => {
  const [credentials, setCredentials] = useState(DEFAULT_CREDENTIALS);

  const handleChange = (key, value) => {
    setCredentials((credentials) => ({ ...credentials, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <Card className="auth-form">
      <Card.Body>
        <Card.Title>
          <h3>Login</h3>
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
          <div className="d-flex flex-row align-items-end">
            <Button disabled={isLoading} type="submit" className="me-3">
              {isLoading ? <Spinner as="span" size="sm" /> : "Submit"}
            </Button>
            <Link to="/register">Don't have an account? Signup</Link>
          </div>
        </Form>
        {!_.isEmpty(errors) && <ErrorAlert className="mt-3" errors={errors} />}
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
