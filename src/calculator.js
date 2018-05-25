export default function Calculator() {

    function sum(x, y) {
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return 0;
    }

    return {
        sum,
        substract,
        multiply
    }
};


