import { useState } from "react";
import { TaskCardVM } from "../../Models/TaskCardVM";
import { FormState, useForm, UseFormRegister } from "react-hook-form";
import { AddCardModalFormFieldValues } from "./AddCardModal/AddCardModal";

export interface UseAddCardModalHookProps {
  listId: number;
  addCard: (cardToAdd: TaskCardVM, listId: number) => void;
}

export interface UseAddCardModalHookResult {
  isModalShown: boolean;
  showModal: () => void;
  hideModal: () => void;
  saveCard: () => void;
  register: UseFormRegister<AddCardModalFormFieldValues>;
  formState: FormState<AddCardModalFormFieldValues>;
}

export default function useAddCardModal({listId, addCard}: UseAddCardModalHookProps): UseAddCardModalHookResult {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const { register, handleSubmit, reset, formState } = useForm<AddCardModalFormFieldValues>({
    mode: 'onChange'
  });

  function showModal() {
    setIsModalShown(true);
  }

  function hideModal() {
    reset();
    setIsModalShown(false);
  }

  function onSaveCard({name, description} : AddCardModalFormFieldValues) {
    const cardToAdd = { name: name, description: description }; 
    addCard(cardToAdd, listId);
    reset();
    setIsModalShown(false);
  }

  const saveCard = handleSubmit(onSaveCard);

  return {
    isModalShown,
    showModal,
    hideModal,
    saveCard,
    register,
    formState
  }
}