// Problem 2: Write a program to find the input number is odd or even.

const checkOddEven = (num) =>{
    if(num % 2 == 0) return 'Even';
    else return 'Odd';
}

console.log(checkOddEven(100)); // Even
console.log(checkOddEven(56)); // Even
console.log(checkOddEven(33)); // Odd
console.log(checkOddEven(88)); // Even
console.log(checkOddEven(32)); // Even
