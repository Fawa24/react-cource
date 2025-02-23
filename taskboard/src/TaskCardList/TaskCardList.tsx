import TaskCard from "../TaskCard/TaskCard";
import { TaskCardListProps } from "./TaskCardListProps";
import "./TaskCardList.css"
import ListHeader from "./ListHeader/ListHeader";
import AddCardButton from "./AddCardButton/AddCardButton";

export default function TaskCardList({name, cardList} : TaskCardListProps) {
  return <div className="d-flex flex-column task-card-list">
    <ListHeader name={name} count={cardList.length}/>
    <AddCardButton />
    {cardList.map(x => <TaskCard name={x.name} description={x.description} />)}
  </div>
}