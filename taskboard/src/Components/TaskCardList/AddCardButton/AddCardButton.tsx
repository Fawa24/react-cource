import { Button, Card, Modal } from "react-bootstrap";
import "./AddCardButton.css";
import { TaskCardVM } from "../../Models/TaskCardVM";
import useAddCardModal from "./useAddCardModal";

interface AddCardButtonProps {
  listId: number;
  addCard: (cardToAdd: TaskCardVM, listId: number) => void;
}

export default function AddCardButton({ listId, addCard }: AddCardButtonProps) {
  const {isModalShown, showModal, hideModal, saveCard} = useAddCardModal({listId, addCard});

  return <>
    <Modal show={isModalShown} centered>
      <Modal.Header>Add new card</Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={saveCard}>Save</Button>
        <Button variant="secondary" onClick={hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    <Card className="task-card-list-component add-card-button" onClick={showModal}>
      <i className="bi bi-plus fs-5"></i>
      <p className="m-0">Add new card</p>
    </Card>
  </>
}