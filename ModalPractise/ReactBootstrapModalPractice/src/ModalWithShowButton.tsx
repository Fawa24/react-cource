import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function ModalWithShowButton() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function onShowClick() {
    setShowModal(true);
  }

  function onHideClick() {
    setShowModal(false);
  }

  return <>
    <Button variant="primary" onClick={onShowClick}>Show</Button>
    <Modal show={showModal}>
      <Modal.Header>Dummy header</Modal.Header>
      <Modal.Body>Some dummy text</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHideClick}>Close</Button>
      </Modal.Footer> 
    </Modal>
  </>
}