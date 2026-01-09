console.log("Part - 6");
// Practice Question
// create a function which prints a poem 
function poem() {
    console.log(`Twinkle, twinkle, little star,\n How I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky. `);
}

poem();

// practice question
// create a fuction for dice roll
function diceRoll() {
    let dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
} 
diceRoll();

// practice question
// Create a Function that gives us the average of 3 numbers
function  Average(a,b,c) {
    let Average = (a+b+c)/3;
    return Average;
}

// practice question
//Create a Function that print the multiplication table of a number
function Table(n) {
    for(let i=1;i<=10;i++){
        console.log(`${n}X${i}=${n*i}`);
    }
}
let n = parseInt(prompt("Enter number :"));
Table(n);
//practice question 
// Create a function that returns the sun of number from 1 to n 
function sum(n){
    let sum = 0;
    for(let i = 0; i<=n;i++){
       sum = sum + i;
    }
    return sum;
}
let n1 = 10;
sum(n1);
// Practice Question
// create a Function that returns the concatenation of all strings in an Array
let strings = ["hello","hi","bye","beta"];

function concate(str){
    let result;
    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;
}
concate(strings);
// ASSIGNMENT-6
console.log("ASSIGNMENT-6");

// QUESTION -1 
// Qs1. Write a JavaScript function that returns array elements larger than a number.
let num = 10;
let arr = [10,20,30,40,50,60,70,80,90,100];

const elements = function (num , arr){
    for(let i = 0;i<arr.lenght;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}    
elements(10,arr);
// QUESTIION -2 
// Qs2 .Write a JavaScript function to extract unique characters from a string .Example : str = “abcdabcdefgggh” ans =“abcdefgh”

let str = "mynameisujwaldimri";
function unique(str){
    let count = 0;
    let str2 = "";
   for(let i = 0;i<str.length;i++){
        count = 0;
       for(let j = 1;j<str.length;j++){
         if(str[i]===str[j]){
            count++;
         }
       }
        if(count<2){
          str2 = str2+str[i];
          
        }
        
   }
console.log(str2); //ynesujwldr
return 0;
}
unique(str);

// QUESTION -3
// Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output .Example:country=["Australia","Germany","UnitedStatesofAmerica"]
// output:"UnitedStatesofAmerica"
let max = "";
let country=["Australia","Germany","UnitedStatesofAmerica"];
let longest = function (country){
for(let i = 0;i<country.length;i++){
    for(let j=0;j<country.length;j++){
        if(country[i].length>max.length){
            max = country[i];
        }
    }
}
console.log(max);
return max;
}
longest(country);

// QUESTION -4
// Qs4 . Write a JavaScript function to count the number of vowels in a String argument
let vowels = function (a){
    let count = 0;
    for(let i = 0;i<a.length;i++){
        if(a[i]=='a'|| a[i]=='A' || a[i]=='E' || a[i]=='e' || a[i]=='I' || a[i]=='i' || a[i]=='O' || a[i]=='o' || a[i]=='U' || a[i]=='u'){
             count++;
        }
    }
    console.log(count);
    return count;
}
vowels("aeiou");

//QUESTION -5
// Qs5 .Write a JavaScript function to generate a random number with in a range(start,end).

let random = function(start,end){
    let diff = end - start;
    let a = Math.floor(Math.random()*diff)+start;
    console.log(a);
    return a;
}
random(100,200);