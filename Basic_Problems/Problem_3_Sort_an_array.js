// Problem 2: Write a program to sort the elements in an array which consists elements from 1 to 20 in unordered way.

const arr = [10, 3, 5, 6, 2, 15, 9, 8, 13, 17, 16, 20, 18, 1, 19, 12, 14, 4, 7, 11];

// Way 1: Using built-in sort method 
const newArr = arr.sort((a, b) => a - b);
console.log(newArr); // [
                    //   1,  2,  3,  4,  5,  6,  7,
                    //   8,  9, 10, 11, 12, 13, 14,
                    //   15, 16, 17, 18, 19, 20
                    // ]
                    
