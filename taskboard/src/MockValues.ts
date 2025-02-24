import { TaskCardListVM } from "./Components/Models/TaskCardListVM";
import { TaskCardVM } from "./Components/Models/TaskCardVM";

const cardsListOne: TaskCardVM[] = [
  {name: 'Some name', description: 'Exploring new horizons, we embark on a journey filled with challenges and opportunities. The world is constantly evolving, offering countless possibilities.'},
  {name: 'Mariyka', description: 'The best'}
];

const cardsListTwo: TaskCardVM[] = [
  {name: 'Some name', description: 'Exploring new horizons, we embark on a journey filled with challenges and opportunities.'},
  {name: 'Olezhka', description: 'Exploring new horizons, we embark on a journey filled with challenges and opportunities. '},
  {name: 'Again Olezhka', description: 'Again the best'}
];

const initialLists: TaskCardListVM[] = [
  {id: 1, name: 'List one', cardList: cardsListOne},
  {id: 2, name: 'List two', cardList: cardsListTwo}
];

export { initialLists };