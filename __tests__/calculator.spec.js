import Carculator from '../src/calculator';
let app;

describe('calculator', function () {

    beforeEach(function () {
        app = Calculator();
    });

    it('sums two values ', function () {
        expect(Calculator.sum(0, 0)).toBe(0)
    });

});