import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import Landing from "../containers/Landing";

import NavigationBar from "../components/NavigationBar";

const WithNavigationBar = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calendar" element={WithNavigationBar()} />
    </Routes>
  );
};

export default Routing;
