import Undead from "../js/Undead";

test('create Undead', () => {
    const player = new Undead('Скелет', 'Undead');
    expect(player).toEqual({
    name: 'Скелет',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
});    
});
