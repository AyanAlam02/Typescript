#!/usr/bin/env node

// Import 'inquirer' module, which is a command line interface package for Node.js
import inquirer from "inquirer";

// Import chalk module
import chalk from "chalk";

console.log(chalk.blueBright("Welcome, It Is A Simple Word Counter."));

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const ans = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.yellowBright("Enter your sentence to count the word: "),
    },
]);
const words = ans.Sentence.trim().split(" ");

// Print the array of words to the console
console.log(chalk.green(`words are: ${words}`));

// Print the word count of the sentence to the console
console.log(chalk.greenBright(`Your Word Count For The Given Sentence Is ${words.length}`));

console.log(chalk.gray("\n\n\nMade By Ayan Alam"));

