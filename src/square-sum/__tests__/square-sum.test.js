const suma = require('../square-sum');

describe('squareSum', () => {

    test('should return 0 for an empty array', () => {
        expect(suma([])).toBe(0);
    });

    test('should return the square of a single number', () => {
        expect(suma([3])).toBe(9);
    });

    test('should return the sum of squares for multiple numbers', () => {
        expect(suma([1, 2, 2])).toBe(9);
        expect(suma([1, 2, 3])).toBe(14);
        expect(suma([0, 0, 0])).toBe(0);
    });
});