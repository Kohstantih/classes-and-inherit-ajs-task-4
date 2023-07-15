import Zombie from "../js/Zombie";

test('create Zombie', () => {
    const player = new Zombie('Мертвец', 'Zombie');
    expect(player).toEqual({
    name: 'Мертвец',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
});    
});
