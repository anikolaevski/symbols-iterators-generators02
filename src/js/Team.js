/* eslint-disable no-plusplus */
/* eslint-disable require-yield */
export default class Team {
  constructor(obj) {
    this.seq = Team.newCounter();
    this.name = obj.name;
    this.type = obj.type;
    this.health = obj.health;
    this.level = obj.level;
    this.attack = obj.attack;
    this.defence = obj.defence;
    Team.instances();
    Team.instances.all.push(this);
  }

  // eslint-disable-next-line generator-star-spacing
  *[Symbol.iterator]() {
    let current = this.seq;
    const last = Team.maxCounter();
    // метод должен вернуть объект с методом next()
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            // eslint-disable-next-line no-plusplus
            value: Team.instances.all[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }

  // Генерация номера объекта
  static newCounter() {
    if (typeof (Team.newCounter.counter) === 'undefined') {
      Team.newCounter.counter = 0;
    }
    return ++Team.newCounter.counter;
  }

  // К-во объектов
  static maxCounter() {
    return Team.newCounter.counter;
  }

  // Все объекты класса
  static instances() {
    if (typeof (Team.instances.all) === 'undefined') {
      Team.instances.all = [];
    }
    return Team.instances.all;
  }
}
