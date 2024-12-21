/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random();

const numb1 = Number(prompt("What is your first number"));
const numb2 = Number(prompt("What is your second number"));
const operator = prompt("Define your operator");

function facultyCalculator(num1, num2) {
  console.log(numb1);
  console.log(numb2);
  console.log(random);

  if (random < 0.1) {
    if (operator === "+") {
      console.log(num1 - num2);
    }
    if (operator === "*") {
      console.log(num1 + num2);
    }
    if (operator === "-") {
      console.log(num1 / num2);
    }
    if (operator === "/") {
      console.log(num1 ** num2);
    }
  }
  else if (random > 0.1) {
    if (operator === "+") {
      console.log(num1 + num2)
    }
    if (operator === "*") {
      console.log(num1 * num2);
    }
    if (operator === "-") {
      console.log(num1 - num2);
    }
    if (operator === "/") {
      console.log(num1 / num2);
    }
  }
}

facultyCalculator(numb1, numb2);