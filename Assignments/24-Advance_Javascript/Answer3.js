const Calculator = {
    value: 0,
    add(number) {
        this.value += number;
        return this;
    },
    subtract(number) {
        this.value -= number;
        return this;
    },
    multiply(number) {
        this.value *= number;
        return this;
    },
    divide(number) {
        if (number !== 0) {
            this.value /= number;
        } else {
            console.error("Cannot divide by zero.");
        }
        return this;
    },
    getResult() {
        return this.value;
    }
};

// Example usage:
console.log("Result:", Calculator.add(5).multiply(2).subtract(3).divide(4).getResult());
