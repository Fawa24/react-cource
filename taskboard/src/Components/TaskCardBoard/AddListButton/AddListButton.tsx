import { useState } from 'react'
import ListHeader from '../../Shared/ListHeader/ListHeader'
import './AddListButton.css'
import { AddListOffcanvas } from './AddListOffcanvas/AddListOffcanvas';
import { TaskCardListVM } from '../../../Models/TaskCardListVM';

export interface AddListButtonProps {
  addList: (listToAdd: TaskCardListVM) => void;
}

export function AddListButton({ addList }: AddListButtonProps) {
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);

  return <>
    <div id='add-list-button' onClick={() => setShowOffcanvas(true)}>
      <ListHeader>
        <p>Add another list</p>
        <i className="bi bi-plus"></i>
      </ListHeader>
    </div>
    <AddListOffcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} addList={addList} />
  </> 
}