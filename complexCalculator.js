/**
 * Filename: complexCalculator.js
 * Content: A complex calculator that performs various mathematical operations.
 */

// Define a class for the calculator
class Calculator {
  // Constructor to initialize the calculator
  constructor() {
    this.memory = 0; // Memory to store previous results
    this.result = 0; // Result of the current operation
  }

  // Method to add two numbers
  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  // Method to subtract two numbers
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  // Method to multiply two numbers
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  // Method to divide two numbers
  divide(a, b) {
    if (b !== 0) {
      this.result = a / b;
    } else {
      this.result = "Error: Division by zero!";
    }
    return this.result;
  }

  // Method to calculate the square root of a number
  squareRoot(a) {
    this.result = Math.sqrt(a);
    return this.result;
  }

  // Method to calculate the factorial of a number
  factorial(a) {
    if (a >= 0 && Number.isInteger(a)) {
      let fact = 1;
      for (let i = 1; i <= a; i++) {
        fact *= i;
      }
      this.result = fact;
    } else {
      this.result = "Error: Invalid input!";
    }
    return this.result;
  }

  // Method to store the result in memory
  store() {
    this.memory = this.result;
    return this.memory;
  }

  // Method to recall the value from memory
  recall() {
    return this.memory;
  }

  // Method to clear the memory
  clearMemory() {
    this.memory = 0;
  }
}

// Example usage of the Calculator class

const calculator = new Calculator();

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.result); // Output: 8

console.log(calculator.subtract(10, 2)); // Output: 8
console.log(calculator.result); // Output: 8

console.log(calculator.multiply(4, 2)); // Output: 8
console.log(calculator.result); // Output: 8

console.log(calculator.divide(16, 2)); // Output: 8
console.log(calculator.result); // Output: 8

console.log(calculator.squareRoot(64)); // Output: 8
console.log(calculator.result); // Output: 8

console.log(calculator.factorial(3)); // Output: 6
console.log(calculator.result); // Output: 6

calculator.store();
console.log(calculator.recall()); // Output: 6
calculator.clearMemory();
console.log(calculator.recall()); // Output: 0