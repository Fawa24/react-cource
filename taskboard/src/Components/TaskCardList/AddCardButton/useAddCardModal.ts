import { useState } from "react";
import { TaskCardVM } from "../../Models/TaskCardVM";

export interface UseAddCardModalHookProps {
  listId: number;
  addCard: (cardToAdd: TaskCardVM, listId: number) => void;
}

export interface UseAddCardModalHookResult {
  isModalShown: boolean;
  showModal: () => void;
  hideModal: () => void;
  saveCard: () => void;
}

export default function useAddCardModal({listId, addCard}: UseAddCardModalHookProps): UseAddCardModalHookResult {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  function showModal() {
    setIsModalShown(true);
  }

  function hideModal() {
    setIsModalShown(false);
  }

  function saveCard() {
    setIsModalShown(false);
    // addCard(cardToAdd, listId);
  }

  return {
    isModalShown,
    showModal,
    hideModal,
    saveCard
  }
}