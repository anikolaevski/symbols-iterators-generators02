/* eslint-disable no-plusplus */
// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    Team.m.members = [];
    // this.last = 0;
    Team.m.last = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  add(obj) {
    Team.m.members.push(obj);
    // this.last++;
    Team.m.last++;
  }

  static m() {}

  // eslint-disable-next-line class-methods-use-this
  *[Symbol.iterator]() {
    // метод должен вернуть объект с методом next()
    let current = 0;
    return {
      next() {
        // console.log(current, Team.m.last);
      if (current < Team.m.last) {
        const x = Team.m.members[current++];
        yield x;
      };
    };
  }
}
