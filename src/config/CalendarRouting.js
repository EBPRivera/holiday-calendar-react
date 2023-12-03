import { Routes, Route } from "react-router-dom";

import Home from "../containers/Home";

const CalendarRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default CalendarRouting;
