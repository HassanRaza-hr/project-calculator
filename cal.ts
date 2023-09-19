// Assignment for the week is to develop CALCULTOR application which takes input from user via inquirer and perform 
//  - Addition
//  - Subtraction
//  - Multiplication
//  - Modulus
//  - Division
//  - Exponent
import inquirer from "inquirer";
  var result= await inquirer.prompt([{
    name:"number1",
    type:"number",
    message:"Please enter your first number",
},{
     name:"number2",
     type:"number",
     message:"Please enter your second number"
},
{
    name:"model",
    type:"list",
    message:"Please enter your operation",
    choices:["addition","subtraction","multiplication","modulus","division","exponent"],
}])
switch (result.model) {
    case "addition":
        console.log(`the addition of input is: ${result.number1+result.number2}`);
        break;
    case "Subtraction":
        console.log(`the subtraction of input is: ${result.number1-result.number2}`);
        break;
    case "multiplication":
            console.log(`the multiplication of input is: ${result.number1*result.number2}`);
        break;
    case "modulus":
        console.log(`the remainder of input numbers is: ${result.number1%result.number2}`);
        break;
    case "division":
        console.log(`the divison of two numbers is ${result.number1/result.number2}`);
        break;        
    default:"exponent"
        console.log(`exponent: ${result.number1**result.number2}`);
        
        break;
}


