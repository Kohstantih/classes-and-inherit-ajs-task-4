import Magician from "../js/Magician";

test('create Magician', () => {
    const player = new Magician('Маг', 'Magician');
    expect(player).toEqual({
    name: 'Маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
});    
})
