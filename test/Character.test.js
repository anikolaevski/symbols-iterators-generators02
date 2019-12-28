import {
  Character,
} from '../src/js/Character';

test('Test Character', () => {
  const sourceData = {
    name: 'Оби Ван Кеноби',
    type: 'Джедай',
    health: '100',
    level: '80',
    attack: 40,
    defense: 10,
  };
  const result = new Character(sourceData);
  expect(result).toEqual(sourceData);
});
