// 1️⃣ minutesToSeconds(minutes)

function minutesToSeconds(minutes)
{
    if(minutes<0){
        console.log(null);
        return null;
    }
    if(minutes===0){
        console.log(0);
        return 0;
    }
    if(typeof minutes !== "number" ||  Number.isNaN(minutes)){
        console.log(null);
        return null;
    }
    
    let result=minutes*60;
    console.log(result);
    return result;
}

minutesToSeconds(5);
minutesToSeconds(0);
minutesToSeconds(-2);
minutesToSeconds("5");


// 2️⃣ hoursToMinutes(hours)

function hoursToMinutes(hours){

    if(Number.isNaN(hours) || typeof hours!=="number" || hours < 0)
    {
        console.log(null);
        return;
    }

    let result=hours*60;
    console.log(result);
    return;

}
hoursToMinutes(2)    
hoursToMinutes(0)    
hoursToMinutes(-1)   
hoursToMinutes("2")  


// 4️⃣ daysToHours(days)


function daysToHours(days){
    if(typeof days!=="number"||Number.isNaN(days)||days<0){
        console.log(null);
        return;
    }
    let result=days*24;
    console.log(result);
    return;
}

daysToHours(1)    
daysToHours(0)   
daysToHours(-1)  
daysToHours("1")


// 5️⃣ daysToSeconds(days)


function daysToSeconds(days){

    if(typeof days!=="number"||Number.isNaN(days)||days<0){
        console.log(null);
        return;
    }
    let result=days*86400;
    console.log(result);
    return result;

}

daysToSeconds(1)    
daysToSeconds(0)    
daysToSeconds(-1)   
daysToSeconds("1") 


// 6️⃣ isTruthyValue(value)

function isTruthyValue(value) {
    if (value) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

isTruthyValue(1);      // true
isTruthyValue(0);      // false
isTruthyValue("hi");   // true
isTruthyValue("");     // false


// 7️⃣ areBothTruthy(a, b)


function areBothTruthy(a,b){
    if(a&&b){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
}

areBothTruthy(1, "a");
areBothTruthy(1, 0);  
areBothTruthy("", "a");  
areBothTruthy(true, 1); 

// 8️⃣ getStringLength(text)

function getStringLength(text){

    if(typeof text!=="string"){
        console.log(null);
        return;
    }
    let length=text.length;
    console.log(length);
    return length;

}

getStringLength("hello")  
getStringLength("")       
getStringLength("a")     
getStringLength(5)        


// 9️⃣ getFirstAndLastChar(text)

function getFirstAndLastChar(text){

    if(typeof text!=="string" || text.length<2){
            console.log(null);
            return;
        }

    let result = text[0] + text[text.length - 1];
    console.log(result);
    return result;
}
getFirstAndLastChar("hello")  
getFirstAndLastChar("ab")     
getFirstAndLastChar("a")      
getFirstAndLastChar(5)        


// 🔟 capitalizeIfLong(text)

function capitalizeIfLong(text){

    if(typeof text!=="string")
        {
            console.log(null);
            return;
        }
    if(text.length>=5){
        let result = text[0].toUpperCase() + text.slice(1);
        console.log(result);
        return result;
    }
    console.log(text);
    return text;

}

capitalizeIfLong("hello")  
capitalizeIfLong("world")  
capitalizeIfLong("hi")    
capitalizeIfLong(5)        


// 1️⃣1️⃣ isVowel(char)

function isVowel(char){
    let lowerChar = char.toLowerCase();
    if(lowerChar==="a" || lowerChar==="e" || lowerChar==="i" || lowerChar==="o" || lowerChar==="u"){
        console.log(true);
        return;
    }
    console.log(false);
    return;
}

isVowel("a");
isVowel("E");
isVowel("b");
isVowel("ab");


// 1️⃣2️⃣ getLargerNumber(a, b)

function getLargerNumber(a,b){

    if(typeof a!=="number" || typeof b!=="number")
        {
            console.log(null);
            return;
        }
    if(a>b){
        console.log(a);
        return;
    }
    else{
        console.log(b);
        return;
    }
}

getLargerNumber(5, 10);
getLargerNumber(7, 7);
getLargerNumber(-1, 2);
getLargerNumber("5", 2);



// 1️⃣3️⃣ getMiddleNumber(a, b, c)


function getMiddleNumber(a,b,c){
    if(typeof a!=="number" || typeof b!=="number" || typeof c!=="number" || a === b || a === c || b === c){
        console.log(null);
        return;
    }
    
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let middle = a + b + c - max - min;

    console.log(middle);
    return middle;
    
}


getMiddleNumber(1, 2, 3);
getMiddleNumber(3, 1, 2); 
getMiddleNumber(2, 2, 3); 
getMiddleNumber("1", 2, 3);



// 1️⃣4️⃣ formatFullName(firstName, lastName)

function formatFullName(firstName,lastName){
    if(typeof firstName!=="string" || typeof lastName!=="string" || !firstName || !lastName)
        {
            console.log(null);
            return;
        }

    let fullName=lastName+", "+firstName;
    console.log(fullName);
    return fullName;
}

formatFullName("John", "Doe");
formatFullName("Jane", "Lee");
formatFullName("", "Doe");
formatFullName(5, "Doe");


// 1️⃣5️⃣ isValidUsername(username)

function isValidUsername(username){
    if(typeof username!=="string" || (username.length<5 || username.length>12) || !isNaN(username[0]))
        {
            console.log(false);
            return;
        }
    let result=console.log(true);
    return result;

}

isValidUsername("user12");
isValidUsername("1user");
isValidUsername("abc");
isValidUsername("longusername123");