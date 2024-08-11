#!/usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.blue("Welcome, It Is A Simple Todos App."));

let todos = [];
let condition = true;

while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.yellowBright("What Do You Want To Add In Your Todo List?"),
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.yellow("Do You Want To Add More In Your Todos"),
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
console.log(chalk.gray("\n\n\nMade By Ayan Alam"));

