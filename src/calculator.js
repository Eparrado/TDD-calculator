export default function Calculator() {

    function sum(x, y) {
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        return x / y;
    }

    return {
        sum,
        substract,
        multiply,
        divide
    }
};


