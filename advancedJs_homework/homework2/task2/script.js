let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  fetch("https://swapi.py4e.com/api/people/1")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let name=document.getElementById("personName");
        name.innerHTML=data.name;

        document.getElementById("personName").innerHTML = data.name;
        fillTable(data);
    })
    .catch(function (error) {
        console.log(error);
    });
});


function fillTable(data) {
  let statsBody = document.getElementById("personStats");

  statsBody.innerHTML = `
    <tr>
      <td>Height</td>
      <td>${data.height}</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>${data.mass}</td>
    </tr>
    <tr>
      <td>Eye color</td>
      <td>${data.eye_color}</td>
    </tr>
    <tr>
      <td>Hair color</td>
      <td>${data.hair_color}</td>
    </tr>
  `;
}