import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import getErrors from "../helpers/getErrors";
import useAxiosInstance from "../hooks/useAxiosInstance";
import SignupForm from "../components/Forms/SignupForm";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const { username, password, firstName, lastName } = formData;
    setIsLoading(true);

    await axiosInstance
      .post("/auth/register", {
        username,
        password,
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        setErrors(getErrors(e));
      });

    setIsLoading(false);
  };

  return (
    <div id="signup-page" className="auth-form-page">
      <div className="gradient" />
      <Container>
        <Row>
          <Col xs={8} />
          <Col xs={4}>
            <SignupForm
              onSubmit={handleLogin}
              isLoading={isLoading}
              onError={setErrors}
              errors={errors}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
