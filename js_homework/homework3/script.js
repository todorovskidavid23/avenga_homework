// HOMEWORK Part 1
// Write a JavaScript function which accepts a parameter, returns its type, and prints it in the console.

// Call the function 5 times for 5 different types: object, boolean, number, string, undefined


function getType(value) {
    let type = typeof value;
    console.log(type);
    return type;
}


getType({});           
getType(true);         
getType(10);           
getType("David");     
getType(undefined);    


// HOMEWORK Part 2
// Write a JavaScript function that:

// Calculates your dog's age (1 human year = 7 dog years)
// Bonus: Make it work for dog to human conversion as well

function calculateDogAge(age, conversion) {
    if (conversion === "humanToDog") {
        let dogAge = age * 7;
        console.log("Your dog's age is " + dogAge + " dog years.");
        return dogAge;
    }
    else if (conversion === "dogToHuman") {
        let humanAge = age / 7;
        console.log("Your dog's age in human years is " + humanAge + " years.");
        return humanAge;
    }
    else {
        console.log("Invalid conversion type.");
    }
}

calculateDogAge(1, "humanToDog");   
calculateDogAge(7, "dogToHuman");  


// prv nacin
// HOMEWORK Part 3 prv nacin
// It is recommended to use AI tools for this task.

// Write a JavaScript function for an ATM:
// ATM should give cash
// Return "Not enough money" if requested more than balance
// Return amount withdrawn and money left if enough
// Hardcode your account money in the program
// Bonus: Make it work with prompt()!


function atmWithdraw(requestedAmount) {
    let balance = 1000; 

    if (Number.isNaN(requestedAmount) || requestedAmount <= 0) {
        console.log("Please enter a valid amount.");
        return;
    }

    if (requestedAmount > balance) {
        console.log("Not enough money.");
        return;
    }

    let remainingBalance = balance - requestedAmount;
    console.log("You withdrew " + requestedAmount + ". Money left: " + remainingBalance + ".");
    return; 
}

let input1 = prompt("Enter amount to withdraw:");
let amount1 = parseInt(input1);
let result = atmWithdraw(amount1);
console.log(result);

// vtor nacin so sekoj refresh mi pamti kolku balance imam preostanato
// HOMEWORK Part 3 

function atmWithdraw(requestedAmount) {


    let balance = localStorage.getItem("balance");
    if (balance === null) {
        balance = 1000;
        localStorage.setItem("balance", balance);
    } else {
        balance = Number(balance);
    }

    if (typeof requestedAmount !== "number" || Number.isNaN(requestedAmount) || requestedAmount <= 0) {
        console.log("Please enter a valid amount.");
        return;
    }

    if (requestedAmount > balance) {
        console.log("Not enough money.");
        return;
    }

    balance -= requestedAmount;

    localStorage.setItem("balance", balance);

    console.log("You withdrew " + requestedAmount);
    console.log("Money left: " + balance);
}


let input2 = prompt("Enter amount to withdraw:");
let amount2 = parseInt(input2);

atmWithdraw(amount2);