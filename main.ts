//todo list application


import inquirer from "inquirer";

let todolist = [];
let conditions =true;

console.log("Welcome to Javeria's TodoList Application");

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name:"task",
            type: "input",
            message: "Enter your New task :"
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List Successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name:"addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False",

        }
    ]);

    conditions =addMoreTask.addmore
}
console.log("Your updated Todo-List:" , todolist);