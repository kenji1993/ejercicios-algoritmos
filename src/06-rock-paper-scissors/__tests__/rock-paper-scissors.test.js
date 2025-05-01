const rps = require('../rock-paper-scissors.js');


describe('rock-paper-scissors', () => {

    test('should return "Player 1 won!" when player 1 chooses scissors and player 2 chooses paper', () => {
        expect(rps('scissors', 'paper')).toBe('Player 1 won!');
    });

    test('should return "Player 2 won!" when player 1 chooses scissors and player 2 chooses rock', () => {
        expect(rps('scissors', 'rock')).toBe('Player 2 won!');
    });

    test('should return "Draw!" when both players choose paper', () => {
        expect(rps('paper', 'paper')).toBe('Draw!');
    });

    test('should return "Player 1 won!" when player 1 chooses paper and player 2 chooses rock', () => {
        expect(rps('paper', 'rock')).toBe('Player 1 won!');
    });

    test('should return "Player 2 won!" when player 1 chooses rock and player 2 chooses paper', () => {
        expect(rps('rock', 'paper')).toBe('Player 2 won!');
    });

    test('should return "Player 1 won!" when player 1 chooses rock and player 2 chooses scissors', () => {
        expect(rps('rock', 'scissors')).toBe('Player 1 won!');
    });

    test('should return "Player 2 won!" when player 1 chooses paper and player 2 chooses scissors', () => {
        expect(rps('paper', 'scissors')).toBe('Player 2 won!');
    });

    test('should return "Draw!" when both players choose rock', () => {
        expect(rps('rock', 'rock')).toBe('Draw!');
    });
});