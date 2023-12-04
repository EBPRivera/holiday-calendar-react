import { Route, Routes } from "react-router-dom";

import Login from "../containers/Login";
import Signup from "../containers/Signup";

import AuthRouting from "./AuthRouting";

const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthRouting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default Routing;
