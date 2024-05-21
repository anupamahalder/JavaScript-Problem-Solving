// Problem 8: Find the large elements from an array

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const findUniqueElement = (array) =>{
    let ans = -1;
    for(let i=0;i<numbers.length;i++){
        if(ans < numbers[i]){
            ans = numbers[i];
        }
    }
    return ans;
}

const result = findUniqueElement(numbers);
console.log(result); // 10
