//Student constructor function

function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;

  this.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };

  this.getInfo = function () {
    return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
  };

  this.getGradesAverage = function () {
    let sum = 0;
    for (let grade of this.grades){
      sum =sum + grade;
    } 
    return sum / this.grades.length;
  };
}

let students = [
  new Student("David", "Todorovski", 2002, "Avenga", [10, 10, 10, 10]),
  new Student("Mila", "Todorovska", 2009, "Web", [9, 8, 10]),
  new Student("Marko", "Markovski", 2003, "Data", [7, 9, 8]),
];

// console.log(students[0].getGradesAverage());

for(let student of students){
  console.log(`${student.getInfo()} Student is ${student.getAge()} years old. His average grade is ${student.getGradesAverage()}.`);
}


// List generator from an array

let names = ["David", "Mila", "Marko"];

    let list = document.getElementById("list");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
      let html = "";

      for (let name of names) {
        html += `<li>${name}</li>`;
      }

      list.innerHTML = html;
    });



// List Generator dynamically from inputs

    let color = document.getElementById("color");
    let fontSize = document.getElementById("fontSize");
    let items = document.getElementById("items");
    let Btn = document.getElementById("Btn");
    let resultDiv = document.getElementById("result");

    Btn.addEventListener("click", function () {
    
      let itemsText = items.value;
      let itemsArray = itemsText.split(",");
      
      let html = "";

      for (let item of itemsArray) {
        html += `<li>${item}</li>`;
      }

      let ulHtml = `
        <ul style="color: ${color.value}; font-size: ${fontSize.value}px;">
          ${html}
        </ul>
      `;

      // resultDiv.innerHTML += ulHtml;
      resultDiv.innerHTML = ulHtml; 
    });