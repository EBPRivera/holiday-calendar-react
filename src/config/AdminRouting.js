import { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import useAxiosInstance from "../hooks/useAxiosInstance";
import AdminHolidays from "../containers/AdminHolidays";

const INIT_CONTEXT_DATA = {
  holidays: [],
};

export const AdminContext = createContext(INIT_CONTEXT_DATA);

const AdminRouting = () => {
  const [contextData, setContextData] = useState(INIT_CONTEXT_DATA);
  const axiosInstance = useAxiosInstance();

  const fetchHolidays = async () => {
    await axiosInstance.get("/holidays").then(({ data }) => {
      setContextData((contextData) => ({ ...contextData, holidays: data }));
    });
  };

  useEffect(() => {
    fetchHolidays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminContext.Provider
      value={{ ...contextData, fetchHolidays: fetchHolidays }}
    >
      <Routes>
        <Route path="/holidays" element={<AdminHolidays />} />
      </Routes>
    </AdminContext.Provider>
  );
};

export default AdminRouting;
