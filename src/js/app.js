/* eslint-disable no-console */
import Team from './Team';

console.log('app started');

const obj1 = new Team({
  name: 'Оби Ван Кеноби', health: '100', level: '80', type: 'Джедай', attack: 40, defence: 10,
});
const obj2 = new Team({
  name: 'Дарт Сидиус', health: '100', level: '80', type: 'Ситх', attack: 40, defence: 10,
});
const obj3 = new Team({
  name: 'Люк Сайуокер', health: '100', level: '80', type: 'Джедай', attack: 40, defence: 10,
});
const obj4 = new Team({
  name: 'Анакин Сайуокер', health: '100', level: '80', type: 'Джедай', attack: 40, defence: 10,
});
const obj5 = new Team({
  name: 'Лея Органа', health: '100', level: '80', type: 'Джедай', attack: 40, defence: 10,
});
const obj6 = new Team({
  name: 'Хан Соло', health: '100', level: '80', type: 'Человек', attack: 40, defence: 10,
});


for (const obj of Team.instances()) {
  console.log(obj);
}
console.log(`Team.maxCounter()=${Team.maxCounter()}`);

console.log('Trying to iterate:')
let k = 0;
for (const obj of Team) {
  console.log(++k, obj);
}
