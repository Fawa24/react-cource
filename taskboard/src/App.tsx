import 'bootstrap/dist/css/bootstrap.min.css';
import TaskCardList from './TaskCardList/TaskCardList';
import { TaskCardProps } from './TaskCard/TaskCardProps';

function App() {
  const cards: TaskCardProps[] = [
    {name: 'Some name', description: 'Some description'},
    {name: 'Mariyka', description: 'The best'}
  ]
  
  return (
    <TaskCardList name={'Task card'} cardList={cards} />
  )
}

export default App
