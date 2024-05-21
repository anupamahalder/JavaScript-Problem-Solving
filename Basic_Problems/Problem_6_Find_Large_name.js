// Problem 6: Find the large name from tha array of strings
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const findLargeName = (array) =>{
    if(array.length == 0) return '';
    let ans = array[0];
    for(let i=0;i<array.length;i++){
        if(ans.length < array[i].length){
            ans = array[i];
        }
    }
    return ans;
}

const result = findLargeName(friends);
console.log(result);
