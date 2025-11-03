let arr = [10, 15, 20, 25, 30];
let even = [];
let odd = [];

for (let num of arr) {
    if (num % 2 === 0) {
        even.push(num);
    } else {
        odd.push(num);
    }
}

console.log("Even Numbers:", even);
console.log("Odd Numbers:", odd);