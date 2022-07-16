//Take the input

// take the operator
const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take the operand
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else {
  result = number1 / number2;
}

// display the result
alert("The result is:" + `${number1} ${operator} ${number2} = ${result}`);
