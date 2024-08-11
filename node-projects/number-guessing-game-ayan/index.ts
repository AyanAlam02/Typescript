#!/usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bold.yellowBright("Welcome To Number Guessing Game!"));


const randomNumber = Math.floor(Math.random() * 4 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: chalk.blue("Please Guess A Random Number Between 1 To 4: "),
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log(chalk.bold.greenBright("\nCongratulations! 🎉 You Guessed The Right Number."));
} else {
  console.log(chalk.bold.redBright(`\nYou Guessed The Wrong Number. The Right Number Was ${chalk.bold(randomNumber)}.`));
}

console.log(chalk.grey("\n\n\nMade By Ayan Alam."));
