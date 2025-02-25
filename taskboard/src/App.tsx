import 'bootstrap/dist/css/bootstrap.min.css';
import TaskCardBoard from './Components/TaskCardBoard/TaskCardBoard';
import { useTaskCards } from './Hooks/useTaskCards';
import './App.css';

function App() {
  const {lists, addCard} = useTaskCards();
  
  return (
    <TaskCardBoard cardLists={lists} addCard={addCard} />
  )
}

export default App
