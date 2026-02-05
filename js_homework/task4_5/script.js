// 1. Average of Numbers
// Goal: Ask the user for how many numbers they want to enter, store them in an array, and calculate the average.

// Function: function calculateAverage()

// Input:

// Number count
// Numbers
// Output: Average value

// Test Cases:

// Input: 3, 10, 20, 30 → Output: 20
// Input: 4, 5, 5, 5, 5 → Output: 5

function calculateAverage(count, numbers) {
    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum += numbers[i];
    }
    
    return sum / count;
}
console.log(calculateAverage(3,[10,20,30]));


// 2. Count Even Numbers
// Goal: Store user input numbers in an array and count how many are even.

// Function: function countEvenNumbers()

// Input:

// Array of numbers
// Output: Count of even numbers

// Test Cases:

// Input: [1, 2, 3, 4, 6] → Output: 3
// Input: [7, 9, 11] → Output: 0

function countEvenNumbers(numbers){
    let counter=0;
    for(let i=0;i<numbers.length;i++){
        let element=numbers[i];
        if(element%2===0){
            counter++;
        }
    }
    return counter;
}

console.log(countEvenNumbers([1,2,3,4,6]));
console.log(countEvenNumbers([7,9,11]));


// 3. Find the Smallest Number
// Goal: Read numbers into an array and determine the smallest value.

// Function: function findSmallest()

// Input:

// Array of numbers
// Output: Smallest number

// Test Cases:

// Input: [4, 2, 9, 1] → Output: 1
// Input: [10, 20, 30] → Output: 10

function findSmallest(numbers){
debugger;
    let smallest=+Infinity;
    for(let i=0;i<numbers.length;i++){

        let number=numbers[i];
        if(number<smallest){
            smallest=number;
        }
        
    }
    return smallest;


}
console.log(findSmallest([4,2,9,1]));

// 4. Reverse an Array
// Goal: Create an array and output a new array with reversed order.

// Function: function reverseArray()

// Input:

// Array
// Output: Reversed array

// Test Cases:

// Input: [1, 2, 3] → Output: [3, 2, 1]
// Input: [5, 10] → Output: [10, 5]

function reverseArray(arr){
debugger;
    let reversed=[];

    for(let i=0;i<arr.length;i++){
        let element=arr[i];
        reversed.unshift(element);
    }
    return reversed;


}
console.log(reverseArray([1,2,3]));
console.log(reverseArray([1,2,3,4,5,6,7]));

// 5. Sum of Positive Numbers
// Goal: Store numbers in an array and calculate the sum of positive values.

// Function: function sumPositiveNumbers()

// Input:

// Array of numbers
// Output: Sum of positive numbers

// Test Cases:

// Input: [1, -2, 3, -4, 5] → Output: 9
// Input: [-1, -2, -3] → Output: 0

function sumPositiveNumbers(numbers){

    let sum=0;

    for(let i=0;i<numbers.length;i++){
        let element=numbers[i];
        if(element>0){
            sum=sum+element;
        }

    }
    return sum;

}
console.log(sumPositiveNumbers([1,-2,3,-4,5]));
console.log(sumPositiveNumbers([-1, -2, -3]));


// 6. FizzBuzz
// Goal: Print numbers from 1 to 100 with specific replacement rules.

// Function: function fizzBuzz()

// Output: Sequence of numbers with "Fizz", "Buzz", or "FizzBuzz"

// Test Cases:

// Input: 3 → Output: "Fizz"
// Input: 5 → Output: "Buzz"
// Input: 15 → Output: "FizzBuzz"

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }
    }
}
fizzBuzz();

//7. Sum Until Zero
// Goal: Continuously ask for numbers and stop when the user enters zero. Output the sum.

// Function: function sumUntilZero()

// Input:

// Numbers ending with 0
// Output: Sum of entered numbers

// Test Cases:

// Input: 5, 3, 2, 0 → Output: 10
// Input: 1, 1, 1, 0 → Output: 3

function sumUntilZero() {
    let sum = 0;

    while (true) {
        let number = parseInt(prompt("Enter a number (0 to stop):"));
        if (number === 0) {
            break;
        }
        sum =sum + number;
    }
    return sum;
}
console.log(sumUntilZero());

// 8. Multiplication Table
// Goal: Generate a multiplication table for a given number from 1 to 10.

// Function: function multiplicationTable()

// Input:

// Number
// Output: Multiplication table

// Test Cases:

// Input: 5 → Output: 5 x 10 = 50
// Input: 3 → Output: 3 x 7 = 21

function multiplicationTable(number){

    for(let i=1;i<=10;i++){
        console.log(number + " x " + i + " = " + (number * i));
    }
}
multiplicationTable(5);
multiplicationTable(3);

// 9. Count Digits
// Goal: Determine how many digits a number contains.

// Function: function countDigits()

// Input:

// Number
// Output: Digit count

// Test Cases:

// Input: 1234 → Output: 4
// Input: 7 → Output: 1

// function countDigits(number){
//     let n = Math.abs(number); 

//     if (n === 0) 
//     {
//         return 1;
//     }
//     let count;
//     for (count = 0; n > 0; count++) {
//         n = Math.floor(n / 10);
//     }
//     return count;

// }

function countDigits(number) {
    let count = 0;
    let n = Math.abs(number); 

    if (n === 0) 
        {
            return 1;
        }

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}
console.log(countDigits(1234));
console.log(countDigits(7));
console.log(countDigits(-1234));
console.log(countDigits(10));
console.log(countDigits(0));


// 10. Find Longest String
// Goal: Store strings in an array and find the longest string.

// Function: function longestString()

// Input:

// Array of strings
// Output: Longest string

// Test Cases:

// Input: ["cat", "elephant", "dog"] → Output: "elephant"
// Input: ["hi", "hello"] → Output: "hello"

function longestString(strings) {
    let longest = "";

    for (let str of strings) {
        if (str.length > longest.length) 
        {
            longest = str;
        }
    }

    return longest;
}
console.log(longestString(["cat", "elephant", "dog"]));
console.log(longestString(["hi", "hello"]));


// 11. Reverse a Number
// Goal: Reverse the digits of a given number.

// Function: function reverseNumber()

// Input:

// Number
// Output: Reversed number

// Test Cases:

// Input: 1234 → Output: 4321
// Input: 90 → Output: 9


function reverseNumber(number) {
    // debugger;
    let n = Math.abs(number);
    let reversed = 0;

    while (n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }

    return reversed;
}

console.log(reverseNumber(1234)); 
console.log(reverseNumber(90));


// 12. Prime Number Check
// Goal: Determine whether a number is prime.

// Function: function isPrime()

// Input:

// Number
// Output: "Prime" or "Not Prime"

// Test Cases:

// Input: 7 → Output: "Prime"
// Input: 9 → Output: "Not Prime"

function isPrime(number) {
    if (number <= 1) {
        return "Not Prime";
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return "Not Prime";
        }
    }

    return "Prime";
}
console.log(isPrime(7));
console.log(isPrime(9));  
console.log(isPrime(2));
console.log(isPrime(1));  
console.log(isPrime(0));  



// 13. Remove Duplicates
// Goal: Remove duplicate values from an array.

// Function: function removeDuplicates()

// Input:

// Array with duplicates
// Output: Array without duplicates

// Test Cases:

// Input: [1, 2, 2, 3, 1] → Output: [1, 2, 3]
// Input: [5, 5, 5] → Output: [5]

function removeDuplicates(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let exists = false;

        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === element) {
                exists = true;
                break;
            }
        }

        if (exists === false) {
            unique.push(element);
        }
    }

    return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 1]));
console.log(removeDuplicates([5, 5, 5]));       




// 14. Sum of Digits
// Goal: Calculate the sum of all digits in a number.

// Function: function sumOfDigits()

// Input:

// Number
// Output: Sum of digits

// Test Cases:

// Input: 345 → Output: 12
// Input: 1001 → Output: 2

function sumOfDigits(number) {
    let digits = Math.abs(number).toString();
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        let element=digits[i];
        sum =sum+ Number(element);
    }

    return sum;
}
console.log(sumOfDigits(345)); 
console.log(sumOfDigits(1001));  



// 15. Palindrome Number Check
// Goal: Check whether a number is a palindrome.

// Function: function isPalindrome()

// Input:

// Number
// Output: "Palindrome" or "Not Palindrome"

// Test Cases:

// Input: 121 → Output: "Palindrome"
// Input: 123 → Output: "Not Palindrome"

function isPalindrome(number) {
    let n = Math.abs(number);
    let reversed = 0;
    let original = n;

    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    if(original===reversed){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }
    
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 
console.log(isPalindrome(7));   



// 16. Armstrong Number Check
// Goal: Check if a number is an Armstrong number.

// Function: function isArmstrong()

// Input:

// Number
// Output: "Armstrong" or "Not Armstrong"

// Test Cases:

// Input: 153 → Output: "Armstrong"
// Input: 123 → Output: "Not Armstrong"

function isArmstrong(number) {
    let str = Math.abs(number).toString();
    let sum = 0;
    let n = str.length;

    for (let i = 0; i < n; i++) {
        let element=str[i];
        sum =sum + Math.pow(element, n);
    }

    if (sum === number) {
        return "Armstrong";
    } else {
        return "Not Armstrong";
    }
}
console.log(isArmstrong(153)); 
console.log(isArmstrong(123)); 
console.log(isArmstrong(9474));
console.log(isArmstrong(0));
console.log(isArmstrong(407));


// 17. Calculator with History
// Goal: Perform multiple calculations and store each result in an array.

// Function: function calculatorWithHistory()

// Input:

// Calculations (two numbers and operator)
// Output: Array of results

// Test Cases:

// Input: 2 + 3, 4 * 5 → Output: [5, 20]
// Input: 10 - 4, 8 / 2 → Output: [6, 4]

function calculatorWithHistory(calculations) {
    let results = [];

    for (let calc of calculations) {
        let num1 = calc[0];
        let operator = calc[1];
        let num2 = calc[2];
        let result;

        switch(operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Error: divide by zero";
                }
                break;
            default:
                result = "Invalid operator";
        }

        results.push(result);
    }

    return results;
}

console.log(calculatorWithHistory([[2, "+", 3], [4, "*", 5]]));
console.log(calculatorWithHistory([[10, "-", 4], [8, "/", 2]])); 
console.log(calculatorWithHistory([[10, "/", 0]]));               
