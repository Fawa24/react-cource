import { TaskCardVM } from "./TaskCardVM";

export interface TaskCardListVM {
  id: number;
  name: string;
  cardList: TaskCardVM[];
}