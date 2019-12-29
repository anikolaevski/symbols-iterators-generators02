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

  *[Symbol.iterator]() {
    const { members, last } = this;
    let current = 0;
    // return {
      // next() {
        // console.log(current, Team.m.last);
      if (current < this.last) {
        const x = this.members[current++];
        yield x;
      };
    // };
  // }
}
