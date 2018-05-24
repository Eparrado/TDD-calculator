import Calculator from '../src/calculator';
let calculator;

describe('calculator', function () {

    beforeEach(function () {
        calculator = Calculator();
    });

    it('sums two values ', function () {
        expect(calculator.sum(0, 0)).toBe(0);
        expect(calculator.sum(1, 0)).toBe(1);
    });

});