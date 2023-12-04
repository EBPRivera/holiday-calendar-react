import _ from "lodash";
import { useState, useContext } from "react";
import { Spinner, ListGroup, Card, Button } from "react-bootstrap";

import useAxiosInstance from "../hooks/useAxiosInstance";
import getMonthName from "../helpers/getMonthName";
import { AdminContext } from "../config/AdminRouting";
import CModal from "./CModal";

const DEFAULT_HOLIDAY_STATE = null;

const AdminHolidaysList = ({ holidays, label }) => {
  const adminData = useContext(AdminContext);
  const { fetchAdminData } = adminData;
  const axiosInstance = useAxiosInstance();
  const [showModal, setShowModal] = useState(false);
  const [holidayId, setHolidayId] = useState(DEFAULT_HOLIDAY_STATE);

  const handleShowDeleteConfirmation = (id) => {
    setHolidayId(id);
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    setHolidayId(DEFAULT_HOLIDAY_STATE);
    setShowModal(false);
  };

  const handleConfirmDelete = async () => {
    setShowModal(false);

    await axiosInstance.delete(`/holidays/${holidayId}`).then(() => {
      fetchAdminData();
    });

    setHolidayId(DEFAULT_HOLIDAY_STATE);
  };

  const renderCRUDActions = (holiday) => {
    return (
      <span>
        <Button variant="link">Edit</Button>|
        <Button
          variant="link"
          onClick={() => handleShowDeleteConfirmation(holiday.id)}
        >
          Delete
        </Button>
      </span>
    );
  };

  const renderHolidaysList = () => {
    if (_.isNull(holidays)) return <Spinner />;

    return (
      <ListGroup variant="flush">
        {_.map(holidays, (holiday, index) => {
          return (
            <ListGroup.Item key={index}>
              <div className="d-flex align-items-center">
                <span className="me-3">
                  {holiday.name} -{" "}
                  <b>
                    {getMonthName(holiday.month)}, {holiday.day}
                  </b>
                </span>
                {renderCRUDActions(holiday)}
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  };

  return (
    <>
      <Card className="text-start">
        <Card.Body>
          <Card.Title>
            <h3>{label}</h3>
          </Card.Title>
          {renderHolidaysList()}
        </Card.Body>
      </Card>

      <CModal
        show={showModal}
        onHide={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      >
        Are you sure you want to delete
      </CModal>
    </>
  );
};

export default AdminHolidaysList;
