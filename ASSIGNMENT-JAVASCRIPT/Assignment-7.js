// PRACTICE QUESTION
// Write an arrow function that return the square of a number 'n'
let square = (n) => (
    n*n
);
square(10);

// PRACTICE QUESTION
// Write a function that prints "Hello World" 5 times at intervals of 2 sec 
let id = setInterval(() => {
     console.log("Hello World");
}, 2000);

let hw = setTimeout(() => {
    clearInterval(id);
}, 10000);


// Assignment - 7 
console.log("Assignment - 7");
// Qs1 . Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.

const Average = (array) => {
    let sum = 0;
    for(let i = 0;i<array.length;i++){
        sum = sum+array[i];
    }
    let avg = (sum)/array.length;
    console.log(avg);
    return avg;
}
 
let array = [1,2,3,4,5,6,7,8,9,10];
Average(array);

// Qs2. Write an arrow function named is Even() that takes a singlenumber as argument and returns if it is even or not.

const Even = n => (
    n%2==0
);

Even(2);