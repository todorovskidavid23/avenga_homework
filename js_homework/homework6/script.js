
// HOMEWORK Part 1

// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the
//  console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’
let animal = {
  name: "",
  kind: "",
  speak(message) {
    console.log(`${this.name} says: '${message}'`);
  }
};

animal.name = prompt("Enter animal name:");
animal.kind = prompt("Enter animal kind:");
let msg = prompt("What should it say?");

animal.speak(msg);


// HOMEWORK Part 2
// It is recommended to use AI tools for this task.

// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt() or read them from HTML

let book = {
  title: "",
  author: "",
  readingStatus: false,

  getInfo() {
    if (this.readingStatus === true) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  }
};


book.title = prompt("Enter book title:");
book.author = prompt("Enter author:");
let statusInput = prompt("Have you read it? (true/false, yes/no, 1/0):").toLowerCase();


if (statusInput === "true" || statusInput === "yes" || statusInput === "1") {
  book.readingStatus = true;
} else if (statusInput === "false" || statusInput === "no" || statusInput === "0") {
  book.readingStatus = false;
} else {
  console.log("Invalid input for readingStatus.");
  book.readingStatus = false;
}

console.log(book.getInfo());
