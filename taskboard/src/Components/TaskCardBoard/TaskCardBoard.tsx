import TaskCardList from "../TaskCardList/TaskCardList";
import { TaskCardBoardProps } from "./TaskCardBoardProps";
import './TaskCardBoard.css';

export default function TaskCardBoard({ cardLists }: TaskCardBoardProps) {
  return <div className="card-board">
    <h2 className="card-board-header">My task board</h2>
    <div className="card-board-container">
      {cardLists.map(x => <TaskCardList name={x.name} cardList={x.cardList}/>)}
    </div>
  </div>
}