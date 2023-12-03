import { Route, Routes } from "react-router-dom";

import Login from "../containers/Login";

import AuthRouting from "./AuthRouting";

const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthRouting />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
