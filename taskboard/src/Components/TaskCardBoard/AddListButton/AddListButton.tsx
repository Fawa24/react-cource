import ListHeader from '../../Shared/ListHeader/ListHeader'
import './AddListButton.css'

export function AddListButton() {
  return <div id='add-list-button'>
    <ListHeader>
      <p>Add another list</p>
      <i className="bi bi-plus"></i>
    </ListHeader>
  </div>
}