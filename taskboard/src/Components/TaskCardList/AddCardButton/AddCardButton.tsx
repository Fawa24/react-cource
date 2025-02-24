import { Card, } from "react-bootstrap";
import "./AddCardButton.css";
import { TaskCardVM } from "../../Models/TaskCardVM";
import useAddCardModal from "./useAddCardModal";
import AddCardModal from "./AddCardModal/AddCardModal";

interface AddCardButtonProps {
  listId: number;
  addCard: (cardToAdd: TaskCardVM, listId: number) => void;
}

export default function AddCardButton({ listId, addCard }: AddCardButtonProps) {
  const {isModalShown, showModal, hideModal, saveCard} = useAddCardModal({listId, addCard});

  return <>
    <AddCardModal isModalShown={isModalShown} hideModal={hideModal} saveCard={saveCard} />
    <Card className="task-card-list-component add-card-button" onClick={showModal}>
      <i className="bi bi-plus fs-5"></i>
      <p className="m-0">Add new card</p>
    </Card>
  </>
}