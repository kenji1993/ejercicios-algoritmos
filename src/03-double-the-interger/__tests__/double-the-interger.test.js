const doubleTheInterger = require('../double-the-interger');

describe('doubleTheInterger', () => {
    test('should double the integer', () => {
        expect(doubleTheInterger(2)).toBe(4);
        expect(doubleTheInterger(-2)).toBe(-4);
        expect(doubleTheInterger(0)).toBe(0);
    });
});