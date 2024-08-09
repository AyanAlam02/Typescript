#!/usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome To Number Guessing Game!");


const randomNumber = Math.floor(Math.random() * 4 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess A Random Number Between 1 To 4: ",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Conratulations, You Guessed The Right Number.");
} else {
  console.log(`You Guessed The Wrong Number, The Right Number Was ${randomNumber}.`);
}

console.log("\n\n\nMade By Ayan Alam.");
