const boolToWord = require('../boolean-to-string');


describe('boolToWord', () => {
    test('returns "Yes" for true', () => {
        expect(boolToWord(true)).toBe('Yes');
    });
    test('returns "No" for false', () => {
        expect(boolToWord(false)).toBe('No');
    });
});