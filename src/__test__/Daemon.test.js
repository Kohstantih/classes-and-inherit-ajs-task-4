import Daemon from "../js/Daemon";

test('create Daemon', () => {
    const player = new Daemon('Демон', 'Daemon');
    expect(player).toEqual({
    name: 'Демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
});    
})
