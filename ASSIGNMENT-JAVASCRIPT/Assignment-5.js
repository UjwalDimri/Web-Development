console.log("PART_5");
// practice question 
// Generate a random number between 1 to 100
let num = Math.floor(Math.random()*100+1);
console.log(num);

// practice question
// gentrate a number between 1 and 5
let num2 = Math.floor(Math.random()*5+1);
console.log(num2);

console.log("Assiginment - 5");
// question 1 
// Qs1. Create a program that generates a randomnumber representing adice roll.[The number should be between 1 and 6].
let num3 = Math.floor(Math.random()*6) + 1;
alert(`Dice rolled and the number is ......\n ${num3}`) ;
// question -2 
// Qs2. Create an object representing a car that stores the following properties for the car:name,model,color.
//  Print the car’s name.

const car = {
    name : "Fortuner" ,
    model : "2025model",
    color : "Black"
};
console.log(car.name);

// question -3 
// Qs3 .Create an object Person with their name,age and city.
// Edit their city’s original value to change it to “NewYork”.
// Add a new property country and set it to the UnitedStates.
 
const person = {
    name : "Ujwal",
    age : "18",
    city: "Rishikesh"
};
console.log(person.city);
person.city="NewYork";
console.log(person.city);
person.country="UnitedStates";
console.log(person);