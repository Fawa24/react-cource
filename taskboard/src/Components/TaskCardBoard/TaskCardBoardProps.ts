import { TaskCardListVM } from "../Models/TaskCardListVM";
import { TaskCardVM } from "../Models/TaskCardVM";

export interface TaskCardBoardProps {
  cardLists: TaskCardListVM[];
  addCard: (cardToAdd: TaskCardVM, listId: number) => void;
}