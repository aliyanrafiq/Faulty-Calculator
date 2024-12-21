function facultyCalculator(a, b) {
  const operators = ["+", "-", "*", "/"];
  const randomOperators = operators[Math.floor(Math.random() * operators.length)]
  console.log(randomOperators)
  if (randomOperators < 0.1) {
    switch (randomOperators) {
      case "+":
        return a - b;
      case "-":
        return a / b;
      case "*":
        return a + b;
      case "/":
        return a ** b;
    }
  }
  else {
    switch (randomOperators) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  }
}
const num1 = 10;
const num2 = 5;

const result = facultyCalculator(num1, num2);
console.log(result)
