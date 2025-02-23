import { TaskCardProps } from "./TaskCard/TaskCardProps";
import { TaskCardListProps } from "./TaskCardList/TaskCardListProps";

const cardsListOne: TaskCardProps[] = [
  {name: 'Some name', description: 'Exploring new horizons, we embark on a journey filled with challenges and opportunities. The world is constantly evolving, offering countless possibilities.'},
  {name: 'Mariyka', description: 'The best'}
];

const cardsListTwo: TaskCardProps[] = [
  {name: 'Some name', description: 'Exploring new horizons, we embark on a journey filled with challenges and opportunities.'},
  {name: 'Olezhka', description: 'Exploring new horizons, we embark on a journey filled with challenges and opportunities. '},
  {name: 'Again Olezhka', description: 'Again the best'}
];

const lists: TaskCardListProps[] = [
  {name: 'List one', cardList: cardsListOne},
  {name: 'List two', cardList: cardsListTwo}
];

export { lists };