import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import getErrors from "../helpers/getErrors";
import useAxiosInstance from "../hooks/useAxiosInstance";
import { login } from "../features/user";
import LoginForm from "../components/Forms/LoginForm";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const axiosInstance = useAxiosInstance();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const { username, password } = credentials;
    setIsLoading(true);

    await axiosInstance
      .post("/auth/login", { username, password })
      .then(({ data }) => {
        dispatch(login({ token: data }));
        navigate("/calendar");
      })
      .catch((e) => {
        setErrors(getErrors(e));
      });

    setIsLoading(false);
  };

  return (
    <div id="login-page">
      <div className="gradient" />
      <Container>
        <Row>
          <Col xs={8} />
          <Col xs={4}>
            <LoginForm
              onSubmit={handleLogin}
              isLoading={isLoading}
              errors={errors}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
