// Problem 5: Write a program to find all the numbers between 1 to 15 which are divisible by both 3 and 5.

const getNumbersDivisibleBy3and5 = () => {
    // declare an array 
    const arr = [];
    for(let i=1; i <= 15; i++){
        if(i%3 == 0 && i%5 == 0){
            arr.push(i);
        }
    }
    return arr;
}

const result = getNumbersDivisibleBy3and5();
console.log(result); // [ 15 ]
