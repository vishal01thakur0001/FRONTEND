// const user = Vishal;
// const points = 120;
// const massage = hey ${user}, you have ${points} points.;
// console.log(massage);

// const person = {
// firstName: "Vishal",
// lastName: "Singh",
// age: 22,
// introduce: function() {
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
// }
// person.birthyear = 2025 - person.age;

// console.log(person.birthyear);




let count = 10;

const timer = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Boom!");
    }
}, 1000);