import 'bootstrap/dist/css/bootstrap.min.css';
import TaskCardBoard from './Components/TaskCardBoard/TaskCardBoard';
import { lists } from './MockValues';

function App() {
  return (
    <TaskCardBoard cardLists={lists} />
  )
}

export default App
