// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig

let year = prompt("Please enter a year");
let parsedInput = parseInt(year);

if (!Number.isNaN(parsedInput)) {
    let index = (parsedInput - 4) % 12;

    let zodiac = [
        "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
        "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];

    alert("Chinese Zodiac: " + zodiac[index]);
} else {
    alert("Invalid year");
}