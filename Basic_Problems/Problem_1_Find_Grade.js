// Problem 1: Create a Grade making funtion to get grade from the marks.
const getGrade = (marks) =>{
    if(marks > 90 && marks <= 100) return 'A+';
    else if(marks > 80 && marks <= 90) return 'A';
    else if(marks > 70 && marks <= 80) return 'B+';
    else if(marks > 60 && marks <= 70) return 'B';
    else if(marks > 50 && marks <= 60) return 'C+';
    else if(marks > 40 && marks <= 50) return 'C';
    else if(marks >= 33 && marks <= 40) return 'D';
    else return 'F';
}

console.log(getGrade(100)); // A+
console.log(getGrade(56)); // C+
console.log(getGrade(33)); // D
console.log(getGrade(88)); // A
console.log(getGrade(32)); // F
