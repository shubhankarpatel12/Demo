// Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old
// enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs
// to turn 18.

let age = prompt("Enter your age:");
if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result
// to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 19; // Assuming your age
let yourAge = prompt("Enter your age:");
yourAge = Number(yourAge); // Convert string to number

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log("We are the same age.");
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// (i) using if else
// (ii) ternary operator.

let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}


console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);


// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or
// not using JavaScript?

let number = prompt("Enter a number:");
number = Number(number); // Convert string to number

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}

// Exercises: Level 2
// 1. Write a code which can give grades to students according to theirs scores:
// (i) 80-100, A
// (ii) 70-89, B
// (iii) 60-69, C
// (iv) 50-59, D
// (v) 0-49, F

let score = prompt("Enter the student's score:");
score = Number(score); // Convert string to number

let grade;

if (score >= 80 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 89) {
    grade = 'B';
} else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >= 50 && score <= 59) {
    grade = 'D';
} else if (score >= 0 && score <= 49) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}

console.log(`The grade is ${grade}`);


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// (i)  September, October or November, the season is Autumn.
// (ii) December, January or February, the season is Winter.
// (iii) March, April or May, the season is Spring
// (iv) June, July or August, the season is Summer

let month = prompt("Enter the month:");
month = month.toLowerCase(); // Convert to lower case for case insensitivity

let season;

if (month === "september" || month === "october" || month === "november") {
    season = "Autumn";
} else if (month === "december" || month === "january" || month === "february") {
    season = "Winter";
} else if (month === "march" || month === "april" || month === "may") {
    season = "Spring";
} else if (month === "june" || month === "july" || month === "august") {
    season = "Summer";
} else {
    season = "Invalid month";
}

console.log(`The season is ${season}`);

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.


let day = prompt("What is the day today?");
day = day.toLowerCase(); // Convert to lower case for case insensitivity

if (day === "saturday" || day === "sunday") {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`);
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`);
} else {
    console.log("Invalid day.");
}



// Exercises: Level 3
// 1. Write a program which tells the number of World in a month.

let month2 = prompt("Enter a month:");
month2 = month2.toLowerCase();

let days;

switch (month2) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        days = 30;
        break;
    case "february":
        days = 28;
        break;
    default:
        days = "Invalid month";
}

console.log(`${month2.charAt(0).toUpperCase() + month2.slice(1)} has ${days} days.`);

// 1. Write a program which tells the number of World in a month, now consider leap year

let month3 = prompt("Enter a month:");
month3 = month3.toLowerCase();
let year = prompt("Enter a year:");
year = Number(year);

let days3;

switch (month3) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days3 = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        days3 = 30;
        break;
    case "february":
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            days3 = 29;
        } else {
            days3 = 28;
        }
        break;
    default:
        days3 = "Invalid month";
}

console.log(`${month3.charAt(0).toUpperCase() + month3.slice(1)} has ${days3} days.`);
