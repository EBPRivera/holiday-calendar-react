import { Modal, Button } from "react-bootstrap";

const CModal = ({ children, show, onConfirm, onHide, title = "Alert" }) => {
  const handleHide = (e) => {
    e.preventDefault();
    onHide();
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CModal;
