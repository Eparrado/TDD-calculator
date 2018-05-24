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
        expect(calculator.sum(10, 5)).toBe(15);
        expect(calculator.sum(500, 500)).toBe(1000);
    });

    it('substract two values', function () {
        expect(calculator.substract(1, 0)).toBe(0);
    })
});