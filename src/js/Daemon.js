import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, type, health, level);
    this.type = type;
    this.attack = attack;
    this.defence = defence;
  }
}
