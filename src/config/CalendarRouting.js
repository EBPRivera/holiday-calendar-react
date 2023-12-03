import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import useAxiosInstance from "../hooks/useAxiosInstance";

import Home from "../containers/Home";
import Holidays from "../containers/Holidays";

const INIT_CALENDAR_DATA = {
  holidays: null,
  countries: null,
};

export const CalendarContext = createContext(INIT_CALENDAR_DATA);

const CalendarRouting = () => {
  const [calendarData, setCalendarData] = useState(INIT_CALENDAR_DATA);
  const axiosInstance = useAxiosInstance();

  const fetchCalendarData = async () => {
    let holidays;
    let countries;

    await axiosInstance.get("/holidays").then(({ data }) => {
      holidays = data;
    });
    await axiosInstance.get("/countries").then(({ data }) => {
      countries = data;
    });

    setCalendarData({ holidays, countries });
  };

  useEffect(() => {
    console.log("Fetching");
    fetchCalendarData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CalendarContext.Provider value={calendarData}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
    </CalendarContext.Provider>
  );
};

export default CalendarRouting;
