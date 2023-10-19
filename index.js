#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import figlet from "figlet";
import chalkAnimation from 'chalk-animation';
const sleep = () => new Promise((resolve) => setTimeout((resolve), 2000));
async function welcomeScreen() {
    let title = chalkAnimation.rainbow(figlet.textSync('CALCULATOR APP'));
    await sleep();
    title.stop();
}
await welcomeScreen();
const cal = (num1, num2, opt) => {
    if (opt == "add") {
        console.log(chalk.green(`${num1}+${num2}=${num1 + num2}`));
    }
    else if (opt == "sub") {
        console.log(chalk.green(`${num1}-${num2}=${num1 - num2}`));
    }
    else if (opt == "mul") {
        console.log(chalk.green(`${num1}X${num2}=${num1 * num2}`));
    }
    else if (opt == "div") {
        console.log(chalk.green(`${num1}/${num2}=${num1 / num2}`));
    }
    else {
        console.log("enter a vaild value");
    }
};
const input = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "enter a number"
    },
    {
        type: "number",
        name: "number2",
        message: "enter a number",
    },
    {
        type: "list",
        name: "operator",
        message: "select your operation:",
        choices: ['add', 'sub', 'mul', 'div']
    }
]);
// console.log(input)
cal(input.number1, input.number2, input.operator);
