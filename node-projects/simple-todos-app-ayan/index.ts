#!/usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What Do You Want To Add In Your Todo List?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do You Want To Add More In Your Todos",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
console.log("\n\n\nMade By Ayan Alam");

