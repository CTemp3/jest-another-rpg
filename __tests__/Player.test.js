const Player = require('../lib/Player');

jest.mock('../lib/Potion'); // hehehe

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test("gets player's health value", () => {
    const player = new Player('Veronica');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test("check if player is alive", () => {
    const player = new Player('Veronica');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
    const player = new Player('Veronica');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(6900000000);

    expect(player.health).toBe(0);
});