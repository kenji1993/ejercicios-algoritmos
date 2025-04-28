const bmi = require('../calculate-bmi');

describe('BMI Calculation', () => {

    test('Underweight', () => {
        expect(bmi(50, 1.8)).toBe('Underweight');
    });

    test('Normal', () => {
        expect(bmi(70, 1.8)).toBe('Normal');
    });

    test('Overweight', () => {
        expect(bmi(85, 1.8)).toBe('Overweight');
    });

    test('Obese', () => {
        expect(bmi(100, 1.8)).toBe('Obese');
    });
});