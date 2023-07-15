import Bowman from "../js/Bowman";

test('create Bowman', () => {
        const player = new Bowman('Стрелок', 'Bowman');
        expect(player).toEqual({
        name: 'Стрелок',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });    
})
