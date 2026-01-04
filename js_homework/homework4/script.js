// HOMEWORK #1
// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert

function tellStory(name,mood,activity){
    
    return console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end`);

}
tellStory("David","happy","coding");

// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. 
// If one of the numbers of the array is invalid show an error message instead of a result.

function validateNumber(num) {
    return typeof num === "number" && !Number.isNaN(num);
}

function sumArray(arr) {
    let total = 0;

    for (let num of arr) {
        if (!validateNumber(num)) {
            console.log("ERROR: Invalid number in array");
            return null;
        }
        total += num;
    }

    console.log(total);
    return total;
}


sumArray([1, 2, 3, 4, 5]);      
sumArray([1, 2, "3", 4, 5]);    


// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function joinStrings(arr){
    let result=[];

    for (let i=0;i<arr.length;i++){
        let element=arr[i];
        result.push(element);
    }
    let final =[];
    for (let i = 0; i < result.length; i++) {
        final =final + result[i]+" ";
    }

    console.log(final);
    return final;   
}

joinStrings(["Hello", "there", "students", "of", "SEDC", "!"]);



// Homework #4
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
// and will add the "\n" new line after every even number otherwise it will add " " empty space.


for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i+"\n");
    }
    else{
        console.log(" ");
    }
}


// Homework #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

function maxMinSum(arr){

    let max=Math.max(...arr);
    let min=Math.min(...arr);
    for(num of arr){
        sum=max+min;
    }
    // console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
    let result=console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
    return result;

}

maxMinSum([3, 5, 6, 8, 11]);
maxMinSum([123, 5, 6, 1, 11]);


// Homework #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function getFullNames(firstNames, lastNames) {
    
    if (firstNames.length !== lastNames.length) {
        console.log("Arrays must be of the same length");
        return null;
    }

    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
        fullNames.push(fullName);
    }

    console.log(fullNames);
    return fullNames;
}

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
getFullNames(first, last); 