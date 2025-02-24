import { TaskCardProps } from "../TaskCard/TaskCardProps";

export interface TaskCardListProps {
  id: number;
  name: string;
  cardList: TaskCardProps[];
  addCard: (cardToAdd: TaskCardProps, listId: number) => void;
}