import TaskCardList from "../TaskCardList/TaskCardList";
import { TaskCardBoardProps } from "./TaskCardBoardProps";
import './TaskCardBoard.css';
import { AddListButton } from "./AddListButton/AddListButton";

export default function TaskCardBoard({ cardLists, addCard, addList }: TaskCardBoardProps) {
  return <div className="card-board">
    <h2 className="card-board-header">My task board</h2>
    <div className="card-board-container">
      {cardLists.map(x => <TaskCardList id={x.id} name={x.name} cardList={x.cardList} addCard={addCard} />)}
      <AddListButton addList={addList} />
    </div>
  </div>
}