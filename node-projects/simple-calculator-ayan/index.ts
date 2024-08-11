#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.blue("Welcome, It Is A Simple Calculator."));

const answer = await inquirer.prompt([
  { message: chalk.yellowBright("Enter First Number"), type: "number", name: "firstNumber" },
  { message: chalk.yellowBright("Enter Second Number"), type: "number", name: "secondNumber" },
  {
    message: chalk.blueBright.bold("Select one of the Operators to perform calculation"),
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
      "Exponential",
    ],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === "Exponential") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else {
  console.log(chalk.redBright.bold("Error: Please, Select Valid Operator."));
}
console.log(chalk.gray("\n\nMade By Ayan Alam"));
