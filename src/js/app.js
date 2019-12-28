/* eslint-disable func-names */
/* eslint-disable no-console */
import { Team } from './Team';
import { Character } from './Character';

console.log('app started');

const myTeam = new Team();

const obj1 = new Character({
  name: 'Оби Ван Кеноби', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
});
const obj2 = new Character({
  name: 'Дарт Сидиус', health: '100', level: '80', type: 'Ситх', attack: 40, defense: 10,
});
const obj3 = new Character({
  name: 'Люк Сайуокер', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
});
const obj4 = new Character({
  name: 'Анакин Сайуокер', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
});
const obj5 = new Character({
  name: 'Лея Органа', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
});
const obj6 = new Character({
  name: 'Хан Соло', health: '100', level: '80', type: 'Человек', attack: 40, defense: 10,
});

// add()
myTeam.add(obj1);
myTeam.add(obj2);
myTeam.add(obj3);
myTeam.add(obj4);
myTeam.add(obj5);
myTeam.add(obj6);

const a = function () {
  console.log('start iteration!');
  for (const obj of myTeam) {
    console.log(obj);
  }
  console.log('end iteration!');
};

a();
// setTimeout(a, 2000);
