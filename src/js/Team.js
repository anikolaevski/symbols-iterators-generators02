/* eslint-disable no-plusplus */
// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = [];
    this.last = 0;
  }

  add(obj) {
    this.members.push(obj);
    this.last++;
  }

  [Symbol.iterator]() {
    const { members, last } = this;
    let current = 0;
    function* next() {
      for (current = 0; current < last; current++) {
        yield members[current];
      }
    }
    return next();
  }
}
