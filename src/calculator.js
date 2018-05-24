export default function Calculator() {

    function sum(x, y) {
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }

    return {
        sum,
        substract
    }
};


