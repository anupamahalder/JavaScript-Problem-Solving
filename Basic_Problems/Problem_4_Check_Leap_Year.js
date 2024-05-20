// Problem 2: Write a program to check a year is leap year or not.

const checkLeapYear = (year) => {
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) return true;
    else return false;
}

console.log(checkLeapYear(2000) ? 'Leap Year' : 'Not Leap Year'); // Leap Year
console.log(checkLeapYear(1996) ? 'Leap Year' : 'Not Leap Year'); // Leap Year
console.log(checkLeapYear(2024) ? 'Leap Year' : 'Not Leap Year'); // Leap Year
console.log(checkLeapYear(2015) ? 'Leap Year' : 'Not Leap Year'); // Not Leap Year
