// eslint-disable-next-line import/prefer-default-export
export class Character {
  constructor(obj) {
    this.name = obj.name;
    this.type = obj.type;
    this.health = obj.health;
    this.level = obj.level;
    this.attack = obj.attack;
    this.defense = obj.defense;
  }
}
