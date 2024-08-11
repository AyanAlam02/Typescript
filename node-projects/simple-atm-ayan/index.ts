#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const myPin: number = 125114;
const myAcc: number = 900123456789;
let myBal: number = 125099;

console.log(chalk.blueBright("For Teachers, Pin is 125114"));

console.log(chalk.bold.green("WELCOME TO ATM"));

console.log(chalk.blue(`Account Number: ${myAcc}`));

console.log(chalk.yellow(`You Have ${myBal} In Your Account.`));

let pinInput = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.cyan("Enter Your Account Pin"),
    type: "number",
  },
]);

if (pinInput.pin === myPin) {
  let actionAns = await inquirer.prompt([
    {
      name: "options",
      message: chalk.cyan("Please Select Any Option"),
      type: "list",
      choices: ["Withdraw Cash", "Fast Cash", "Check Balance"],
    },
  ]);
  if (actionAns.options === "Withdraw Cash") {
    let amount = await inquirer.prompt([
      {
        name: "cash",
        message: chalk.cyan("Please, Enter Your Amount"),
        type: "number",
      },
    ]);
    if (amount.cash <= myBal) {
      myBal -= amount.cash;
      console.log(
        chalk.greenBright(
          `Cash Withdrawn Successfully. Your Remaining Balance is ${myBal}`
        )
      );
    } else {
      console.log(
        chalk.redBright(
          `Dear Customer, You Have Insufficient Balance.\nYou Have ${myBal} In Your Account.`
        )
      );
    }
  } else if (actionAns.options === "Fast Cash") {
    let fastAction = await inquirer.prompt([
      {
        name: "CashOptions",
        message: chalk.cyan("Please Select Any Option"),
        type: "list",
        choices: [5000, 10000, 15000, 50000, 200000],
      },
    ]);
    if (fastAction.CashOptions > myBal) {
      console.log(
        chalk.redBright(
          `You Have Insufficient Amount In Your Account.\nYou Have ${myBal} In Your Account.`
        )
      );
    } else if (fastAction.CashOptions === 5000) {
      myBal -= 5000;
      console.log(
        chalk.greenBright(
          `You Have Successfully Withdrawn 5000.\nNow, You Have ${myBal} In Your Account.`
        )
      );
    } else if (fastAction.CashOptions === 10000) {
      myBal -= 10000;
      console.log(
        chalk.greenBright(
          `You Have Successfully Withdrawn 10000.\nNow, You Have ${myBal} In Your Account.`
        )
      );
    } else if (fastAction.CashOptions === 15000) {
      myBal -= 15000;
      console.log(
        chalk.greenBright(
          `You Have Successfully Withdrawn 15000.\nNow, You Have ${myBal} In Your Account.`
        )
      );
    } else if (fastAction.CashOptions === 50000) {
      myBal -= 50000;
      console.log(
        chalk.greenBright(
          `You Have Successfully Withdrawn 50000.\nNow, You Have ${myBal} In Your Account.`
        )
      );
    } else if (fastAction.CashOptions === 200000) {
      myBal -= 200000;
      console.log(
        chalk.greenBright(
          `You Have Successfully Withdrawn 200000.\nNow, You Have ${myBal} In Your Account.`
        )
      );
    }
  } else if (actionAns.options === "Check Balance") {
    console.log(chalk.yellowBright(`Your Remaining Balance Is ${myBal}`));
  }
} else {
  console.log(chalk.red("You Entered Incorrect Pin For This Account Number"));
}

console.log(chalk.gray("\n\n\nMade By Ayan Alam"));
