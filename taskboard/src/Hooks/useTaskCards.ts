import { useState } from "react"
import { initialLists } from "../MockValues.ts"
import { TaskCardProps } from "../Components/TaskCard/TaskCardProps";
import { TaskCardListVM } from "../Components/Models/TaskCardListVM.ts";
import { TaskCardVM } from "../Components/Models/TaskCardVM.ts";

export interface UseTaskCardsHookResults {
  lists: TaskCardListVM[];
  addCard: (cardToAdd: TaskCardProps, listId: number) => void;
}

export function useTaskCards(): UseTaskCardsHookResults {
  const [lists, setLists] = useState<TaskCardListVM[]>(initialLists);

  function addCard(cardToAdd: TaskCardVM, listId: number) {
    const list = lists.find(x => x.id === listId);
    if (list) {
      list.cardList.push(cardToAdd);
    }
    setLists([...lists]);
  }
  
  return {
    lists,
    addCard
  }
}