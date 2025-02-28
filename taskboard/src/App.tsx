import 'bootstrap/dist/css/bootstrap.min.css';
import TaskCardBoard from './Components/TaskCardBoard/TaskCardBoard';
import { useTaskCards } from './Hooks/useTaskCards';
import './App.css';

function App() {
  const {lists, addCard, addList} = useTaskCards();
  
  return (
    <TaskCardBoard cardLists={lists} addCard={addCard} addList={addList}/>
  )
}

export default App
