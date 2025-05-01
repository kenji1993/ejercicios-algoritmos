const lovefunc = require('../opposites-attract');

describe('Love Function', () => {

    test('returns true for odd and even petals', () => {
        expect(lovefunc(1, 2)).toBe(true);
    });

    test('returns false for even and even petals', () => {
        expect(lovefunc(2, 4)).toBe(false);
    });

    test('returns false for odd and odd petals', () => {
        expect(lovefunc(3, 5)).toBe(false);
    });

    test('returns true for even and odd petals', () => {
        expect(lovefunc(2, 3)).toBe(true);
    });
});