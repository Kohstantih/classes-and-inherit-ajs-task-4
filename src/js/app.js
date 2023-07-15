import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const user1 = new Bowman('Арчер', 'Bowman');
const user2 = new Swordsman('Мечник', 'Swordsman');
const user3 = new Magician('Маг', 'Magician');
const user4 = new Daemon('Демон', 'Daemon');
const user5 = new Undead('Андед', 'Undead');
const user6 = new Zombie('Зомби', 'Zombie');

console.log(user1, user2, user3, user4, user5, user6);
