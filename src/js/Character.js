export default class Character {
  constructor(name, type, health = 100, level = 1) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) throw new Error('Введено недопустимое имя');
    if (typeof type !== 'string' || !(type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')) throw new Error('Неподходящий тип персонажа');
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
  }
}
