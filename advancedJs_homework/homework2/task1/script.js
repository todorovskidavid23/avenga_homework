
let btn=document.getElementById("btn");

btn.addEventListener("click", function () {
  fetch("https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let academyTitle = document.getElementById("academyName");
      academyTitle.innerHTML = data.academy;

      
      let list = document.getElementById("students");
      list.innerHTML = ""; 

      for (let studentName of data.students) {
        list.innerHTML += `<li>${studentName}</li>`;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

