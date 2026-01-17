// HOMEWORK Part 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed
let headers = document.querySelectorAll("h1,h3");
for (let i = 0; i < headers.length; i++) {
  headers[i].textContent = "Header changed with JavaScript";
}

let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = "Paragraph changed with JavaScript";
}

let textTags = document.getElementsByTagName("text");
for (let i = 0; i < textTags.length; i++) {
  textTags[i].textContent = "Text tag name changed with JavaScript";
}

// HOMEWORK Part 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)


let numbers = [3, 5, 5]; 

function showNumbers(numbers, list, result) {
  list.innerHTML = "";

  let sum = 0;
  let equation = "";

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]; 

    list.innerHTML += `<li>${num}</li>`;

    sum += num;

    equation += num;
    if (i !== numbers.length - 1) 
    {
      equation += " + ";
    }
  }

  result.innerHTML = `
    <p><b>Equation:</b> ${equation} = ${sum}</p>
    <p><b>Sum:</b> ${sum}</p>
  `;
}

let listElement = document.getElementById("numberList");
let resultElement = document.getElementById("result");

showNumbers(numbers, listElement, resultElement);





