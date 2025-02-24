import { Button, Modal } from "react-bootstrap";

export interface AddCardModalProps {
  isModalShown: boolean;
  hideModal: () => void;
  saveCard: () => void;
}

export default function AddCardModal({isModalShown, hideModal, saveCard}: AddCardModalProps) {
  return <Modal show={isModalShown} centered>
  <Modal.Header>
    <h5>Add new card</h5>
  </Modal.Header>
  <Modal.Body></Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={saveCard}>Save</Button>
    <Button variant="secondary" onClick={hideModal}>Close</Button>
  </Modal.Footer>
</Modal>
}