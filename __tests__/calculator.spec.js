import Calculator from '../src/calculator';
let calculator;

describe('calculator', function () {

    beforeEach(function () {
        calculator = Calculator();
    });

    it('sums two values ', function () {
        expect(calculator.sum(0, 0)).toBe(0);
        expect(calculator.sum(1, 0)).toBe(1);
        expect(calculator.sum(1, 1)).toBe(2);
        expect(calculator.sum(100, 100)).toBe(200);
    });

    it('substracts two values', function () {
        expect(calculator.substract(1, 0)).toBe(1);
        expect(calculator.substract(1, 1)).toBe(0);
    });
});