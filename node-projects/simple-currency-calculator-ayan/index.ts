#!/usr/bin/env node

import inquirer from "inquirer"; //command line interface package for Node.js

import chalk from "chalk";

console.log(chalk.blue("Welcome, It Is A Simple Currency Calculator."));

let currency: any = {
    USD: 1, //base currency
    EUR: 0.92,
    PKR: 278,
    GBP: 0.79,
    INR: 83.3,
    CAD: 1.3,
};

let userAnswer = await inquirer.prompt([ //inquirer prompt function
    {
        name: "from",
        message: chalk.yellowBright.bold("Enter The Currency You Want To Convert?"),
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR", "CAD"],
    },

    {
        name: "to",
        message: chalk.yellowBright.bold("Enter The Currency You Want To Convert In?"),
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR", "CAD"],
    },

    {
        name: "amount",
        message: chalk.blueBright("Enter The Amount You Want To Convert?"),
        type: "number",
    },
]);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(chalk.greenBright(convertedAmount));

console.log(chalk.gray("\n\n\nMade By Ayan Alam." ));

