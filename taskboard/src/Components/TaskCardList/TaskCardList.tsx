import TaskCard from "../TaskCard/TaskCard";
import { TaskCardListProps } from "./TaskCardListProps";
import "./TaskCardList.css"
import ListHeader from "../Shared/ListHeader/ListHeader";
import AddCardButton from "./AddCardButton/AddCardButton";

export default function TaskCardList({ id, name, cardList, addCard } : TaskCardListProps) {
  return <div className="d-flex flex-column task-card-list">
    <ListHeader>
      <p>{name}</p>
      <p>{cardList.length}</p>
    </ListHeader>
    <AddCardButton listId={id} addCard={addCard}/>
    {cardList.map(x => <TaskCard name={x.name} description={x.description} />)}
  </div>
}