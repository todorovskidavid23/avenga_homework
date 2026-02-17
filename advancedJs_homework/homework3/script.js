fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let allStudentsAverageHigher3=data
        .filter(x=>x.averageGrade >3)
        console.log(allStudentsAverageHigher3)

        let allFemaleNames=data
        .filter(x=>x.gender==="Female")
        .filter(x=>x.averageGrade===5)
        .map(x=>x.firstName)
        console.log(allFemaleNames)

        let allMaleNamesSkopje=data
        .filter(x=>x.gender==="Male")
        .filter(x=>x.city==="Skopje")
        .filter(x=>x.age>18)
        .map(x=>`${x.firstName} ${x.lastName}`)

        console.log(allMaleNamesSkopje)

        let allFemale24=data
        .filter(x=>x.gender==="Female")
        .filter(x=>x.age>24)
        .map(x=>x.averageGrade)
        let average=allFemale24.reduce((sum,grade) => sum+grade,0)/allFemale24.length;

        console.log(average);

        let maleNameBAverage2=data
        .filter(x=>x.gender==="Male")
        .filter(x=>x.firstName.slice(0,1)==="B")
        .filter(x=>x.averageGrade>2)
        .map(x=>x.firstName)
        console.log(maleNameBAverage2)


    })
    .catch(function(error){
        console.log(error)
    })