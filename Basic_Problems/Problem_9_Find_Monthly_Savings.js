// Problem 8: Find the savings amount where an array of all payments and an amount of living cost is given as input.
// We will check if a payment is greater than or equal to 3000 then deduct 20% as tax and the living cost then return the
// savings if savings less than 0 then return a string 'earn more' as return else return the savings amount.

const monthlySavings = (payments, livingCost) =>{
    if(!Array.isArray(payments))return 'Invalid Input';
    if(typeof livingCost !== 'number') return 'Invalid Input';
    let savings = 0;
    for(let i=0;i<payments.length;i++){
        if(payments[i] >= 3000){
            const taxAmount = payments[i]*.2;
            savings += (payments[i] - taxAmount);
        }
        else savings += payments[i];
    }
    // deduct living cost 
    savings -= livingCost;
    return savings>=0?savings:"earn more";
}

const result1 = monthlySavings([1000, 2000, 3000], 5400);
console.log(result1); // 0
const result2 = monthlySavings([1000, 2000, 2500], 5000);
console.log(result2); // 500
const result3 = monthlySavings([900, 2700, 3400], 10000);
console.log(result3); // earn more
const result4 = monthlySavings(100, [900, 2700, 3400]);
console.log(result4); // Invalid Input
