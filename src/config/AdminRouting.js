import { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import useAxiosInstance from "../hooks/useAxiosInstance";
import AdminHolidays from "../containers/AdminHolidays";
import AdminHolidayCreate from "../containers/AdminHolidayCreate";

const INIT_CONTEXT_DATA = {
  holidays: null,
  countries: null,
};

export const AdminContext = createContext(INIT_CONTEXT_DATA);

const AdminRouting = () => {
  const [contextData, setContextData] = useState(INIT_CONTEXT_DATA);
  const axiosInstance = useAxiosInstance();

  const fetchAdminData = async () => {
    let holidays;
    let countries;

    await axiosInstance.get("/holidays").then(({ data }) => {
      holidays = data;
    });
    await axiosInstance.get("/countries").then(({ data }) => {
      countries = data;
    });

    console.log(countries);

    setContextData({ holidays, countries });
  };

  useEffect(() => {
    fetchAdminData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminContext.Provider
      value={{ ...contextData, fetchAdminData: fetchAdminData }}
    >
      <Routes>
        <Route path="/holidays" element={<AdminHolidays />} />
        <Route path="/holidays/create" element={<AdminHolidayCreate />} />
      </Routes>
    </AdminContext.Provider>
  );
};

export default AdminRouting;
