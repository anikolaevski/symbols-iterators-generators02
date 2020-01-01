/* eslint-disable no-plusplus */
import { Character } from '../src/js/Character';
import { Team } from '../src/js/Team';

test('Test Team add()', () => {
  const myTeam = new Team();
  const obj = new Character(
    {
      name: 'Оби Ван Кеноби',
      type: 'Джедай',
      health: '100',
      level: '80',
      attack: 40,
      defense: 10,
    },
  );
  myTeam.add(obj);

  const result = myTeam.members[0];

  expect(result).toEqual(obj);
});

test('Test iteration', () => {
  const myObj = [];
  myObj.push(new Character({
    name: 'Оби Ван Кеноби', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
  }));
  myObj.push(new Character({
    name: 'Дарт Сидиус', health: '100', level: '80', type: 'Ситх', attack: 40, defense: 10,
  }));
  myObj.push(new Character({
    name: 'Люк Сайуокер', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
  }));
  myObj.push(new Character({
    name: 'Анакин Сайуокер', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
  }));
  myObj.push(new Character({
    name: 'Лея Органа', health: '100', level: '80', type: 'Джедай', attack: 40, defense: 10,
  }));
  myObj.push(new Character({
    name: 'Хан Соло', health: '100', level: '80', type: 'Человек', attack: 40, defense: 10,
  }));
  const myTeam = new Team();
  for (const obj of myObj) {
    myTeam.add(obj);
  }
  //
  let k = 0;
  for (const obj of myTeam) {
    expect(obj).toEqual(myObj[k++]);
  }
});
