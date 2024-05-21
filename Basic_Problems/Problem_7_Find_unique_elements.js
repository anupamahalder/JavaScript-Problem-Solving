// Problem 7: Find the unique elements from an array

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const findUniqueElement = (array) =>{
    let ans = [];
    for(let i=0;i<numbers.length;i++){
        if(!ans.includes(numbers[i])){
            ans.push(numbers[i]);
        }
    }
    return ans;
}

const result = findUniqueElement(numbers);
console.log(result); // [
                    //   1, 2, 3, 4,  5,
                    //   6, 7, 8, 9, 10
                    // ]
