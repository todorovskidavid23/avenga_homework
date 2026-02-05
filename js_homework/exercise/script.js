

// average of numbers

function calculateAverage(counter,numbers){

    let sum=0;
    for(let i=0;i<counter;i++){
        let element=numbers[i];
        sum=sum+element;
    }
    let result=console.log(sum/counter);
    return result

}

calculateAverage(3,[10,20,30]);
calculateAverage(4,[5,5,5,5]);


function countEvenNumbers(numbers){

    let counter=0;

    for(let i=0;i<numbers.length;i++){
        let element=numbers[i];
        if(element%2==0){
            counter++;
        }
    }
    let result=console.log(counter);
    return result

}

countEvenNumbers([1,2,3,4,5,6,7,8,10]);



function findSmallest(numbers){

    let smallest=+Infinity;

    for(let i=0;i<numbers.length;i++){
        let element=numbers[i];

        if(element<smallest){
            smallest=element;
        }
    }
    // let result=console.log(smallest);
    let resi=document.writeln(`Najmaliot broj e: ${smallest}`);
    return result
    return resi

}
// findSmallest([4,2,9,1])

let count=parseInt(prompt("Kolku broevi ke vnesuvas"));
let arr=[];

for(let i=0;i<count;i++){
    let num=parseFloat(prompt(`Vnesi broj ${i+1}`));
    arr.push(num);
}




findSmallest(arr)