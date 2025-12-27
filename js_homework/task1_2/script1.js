// Task 1: Age Checker

// let input=prompt("Enter your age: ");
// let parsedInput=parseInt(input);

// console.log(parsedInput);

// if(!Number.isNaN(parsedInput) && parsedInput>=0)
//     {
//     if(parsedInput<13){
//         console.log("You are a child.");
//     }else if(parsedInput>=13 && parsedInput<=17){
//         console.log("You are a teenager.");
//     }else {
//         console.log("You are an adult.");
//     }
// }
// else{
//     console.log("Please Enter a valid age.")
// }


//Task 2: Number Sign & Parity Checker

// let input=prompt("Enter a number");
// let parsedInput=parseInt(input);

// if(!Number.isNaN(parsedInput))
// {
//     if(parsedInput>0){
    
//         if(parsedInput %2==0){
//             console.log("The number "+parsedInput+" is positive and even")
//         }
//         else{
//             console.log("The number "+parsedInput+" is positive and odd")
//         }
//     }
//     else if(parsedInput<0){
        
//         if(parsedInput %2==0){
//             console.log("The number "+parsedInput+" is negative and even")
//         }
//         else{
//             console.log("The number "+parsedInput+" is negative and odd")
//         }
//     }
//     else{

//         console.log("Zero number")
//     }
// }
// else{
//     console.log("Invalid input. Please enter a number.")
// }

// let input = prompt("Enter a number");
// let parsedInput = parseInt(input);

// if (!Number.isNaN(parsedInput)) {

//     let parity;
//     let sign;

//     // Проверка парен / непарен (ЕДНАШ)
//     if (parsedInput % 2 === 0) {
//         parity = "even";
//     } else {
//         parity = "odd";
//     }

//     // Проверка позитивен / негативен / нула (ЕДНАШ)
//     if (parsedInput > 0) {
//         sign = "positive";
//     } else if (parsedInput < 0) {
//         sign = "negative";
//     } else {
//         sign = "zero";
//     }

//     // Конкатенација на output
//     if (sign === "zero") {
//         console.log("The number " + parsedInput + " is zero.");
//     } else {
//         console.log("The number " + parsedInput + " is " + sign + " and " + parity + ".");
//     }

// } else {
//     console.log("Invalid input. Please enter a number.");
// }

//Task 3: Login Validation

// let username="david";
// let password="123";

// let inputUsername=prompt("Enter username");
// let inputPassword=prompt("Enter password");

// if (inputUsername === "" || inputPassword === "") {
//     console.log("Username and password cannot be empty.");
// }
// else if (inputUsername === username && inputPassword === password) {
//     console.log("Login successful.");
// }
// else {
//     console.log("Incorrect username or password.");
// }


// Task 4: Simple Calculator

// let num1=prompt("Enter the first number");
// let parsedInput1=parseFloat(num1);

// let num2=prompt("Enter the second number");
// let parsedInput2=parseFloat(num2);

// let operation = prompt("Choose operation (+, -, *, /):");

// if (!(Number.isNaN(parsedInput1) || Number.isNaN(parsedInput2))) {
//     if (operation === "+") {
//         console.log(parsedInput1 + " + " + parsedInput2 + " = " + (parsedInput1 + parsedInput2));
//     }
//     else if (operation === "-") {
//         console.log(parsedInput1 + " - " + parsedInput2 + " = " + (parsedInput1 - parsedInput2));
//     }
//     else if (operation === "*") {
//         console.log(parsedInput1 + " * " + parsedInput2 + " = " + (parsedInput1 * parsedInput2));
//     }
//     else if (operation === "/") {
//         if (parsedInput2 === 0) {
//             console.log("Division by zero is not allowed.");
//         } else {
//             console.log(parsedInput1 + " / " + parsedInput2 + " = " + (parsedInput1 / parsedInput2));
//         }
//     }
//     else {
//         console.log("Invalid operation selected.");
//     }
// }
// else {
//     console.log("Please enter valid numbers.");
// }


// let num1 = prompt("Enter the first number");
// let parsedInput1 = parseFloat(num1);

// let num2 = prompt("Enter the second number");
// let parsedInput2 = parseFloat(num2);

// let operation = prompt("Choose operation (+, -, *, /):");

// if (!Number.isNaN(parsedInput1) && !Number.isNaN(parsedInput2)) {

//     let result;
//     let validOperation = true;

//     switch (operation) {
//         case "+":
//             result = parsedInput1 + parsedInput2;
//             break;

//         case "-":
//             result = parsedInput1 - parsedInput2;
//             break;

//         case "*":
//             result = parsedInput1 * parsedInput2;
//             break;

//         case "/":
//             if (parsedInput2 === 0) {
//                 console.log("Division by zero is not allowed.");
//                 validOperation = false;
//             } else {
//                 result = parsedInput1 / parsedInput2;
//             }
//             break;

//         default:
//             console.log("Invalid operation selected.");
//             validOperation = false;
//     }

//     if (validOperation) {
//         console.log(parsedInput1 + " " + operation + " " + parsedInput2 + " = " + result);
//     }

// } else {
//     console.log("Please enter valid numbers.");
// }


//Task 5: Grade Evaluator

// let score=prompt("Enter score: ");
// let parsedInput=parseInt(score);

// if((parsedInput<0 || parsedInput>100) || Number.isNaN(parsedInput)){
//     console.log("Please enter a valid score between 0 and 100.");   
// }else if(parsedInput>=90 && parsedInput<=100){
//     console.log(`Your score is ${parsedInput} and your grade is A`);
// }else if(parsedInput>=80 && parsedInput<=89){
//     console.log(`Your score is ${parsedInput} and your grade is B`);
// }else if(parsedInput>=70 && parsedInput<=79){
//     console.log(`Your score is ${parsedInput} and your grade is C`);
// }else if(parsedInput>=60 && parsedInput<=69){
//     console.log(`Your score is ${parsedInput} and your grade is D`);
// }
// else{
//     console.log(`Your score is ${parsedInput} and your grade is F`);
// }
