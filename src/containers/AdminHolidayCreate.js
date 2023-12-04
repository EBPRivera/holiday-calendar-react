import { useContext, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import HolidayForm from "../components/Forms/HolidayForm";
import { AdminContext } from "../config/AdminRouting";
import useAxiosInstance from "../hooks/useAxiosInstance";

const AdminHolidayCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const adminData = useContext(AdminContext);
  const { countries, fetchAdminData } = adminData;
  const axiosInstance = useAxiosInstance();

  const handleSubmit = async (formData) => {
    const { name, month, day, year, countryId } = formData;
    setIsLoading(true);

    if (countryId > 0) {
      await axiosInstance
        .post(`/countries/${countryId}/holidays`, {
          name,
          month,
          day,
          year,
        })
        .then(() => {
          fetchAdminData();
        });
    } else {
      await axiosInstance
        .post("/holidays", { name, month, day, year })
        .then(() => {
          fetchAdminData();
        });
    }

    setIsLoading(false);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col className="text-start">
          <Card>
            <Card.Body>
              <Card.Title>
                <h3>Create Holiday</h3>
              </Card.Title>
              <HolidayForm
                className="w-50"
                onSubmit={handleSubmit}
                countries={countries}
                isLoading={isLoading}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHolidayCreate;
