// PART - 3 
console.log("PART -3");
// practice question
let mgs = "help!" ;
let ms = mgs.trim().toUpperCase();
console.log(ms);

// practice question(predict the output )

let n = "ApnaCollege" ;
console.log(n.slice(4,9)); //Colle
console.log(n.indexOf("na")); //2
console.log(n.replace("Apna","our")); //ourCollege

//practice question
let na = n.slice(4).replace('l','t');
console.log(na);

//practice question
 let arr = ["january","july","march","august"];
 console.log(arr);
 arr.shift();
 arr.shift();
 arr.unshift("june");
 arr.unshift("july");
 console.log(arr);

 //practice question

 let date = ["january","july","march","august"];
 date.splice(0,2,"july","june");
 console.log(date);

 //practice question

 let lang = ['c',"c++","html","javascript","python","java","c#","sql"];

 console.log(lang.indexOf("javascript"));

 //practice question

 let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];

console.log("--------------------------------------------------------------------------");

//Assignment -3

// question 1 
// Qs1.Write a JavaScript program to get the first n elements of an array.
// [n can be any positive number].For example:for array [7,9,0,-2]and n=3 Print,[7,9,0]

let arr3 = [1,2,3,4,5];
let n1 = 2;
let fromStart = arr3.slice(0,n1);
console.log(fromStart);

// question 2 
//Qs2.Write a JavaScript program to get the last n elements of an array.
// [n can be any positive number ]. For example : for array [7,9,0,-2]andn=3Print,[9,0,-2]
let fromEnd = arr3.slice(arr3.length-n1); 
console.log(fromEnd);

// Qs3.Write a JavaScript program to check whether a string is blank or not.
let string = prompt("Please enter a string");
if (string.length==0){
    console.log("String is empty");
    alert("String is empty");
}else{
    console.log("String is not empty");
}
// Qs4.Write a JavaScript program to test whether the character at the given(character) index is lowercase.
let char = prompt("Enter a string");
let n2 = parseInt(prompt("Enter the index"));
if(char[n2]==char[n2].toLowerCase()){
    console.log("It is lower case");
} else{
    console.log("It is not lower case");
}

// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.
console.log(`original string ${char}`);
console.log(`After removing spaces ${char.trim()}`);

// Qs6.Write a JavaScript program to check if an element exists in an array or not
let arr2 = ["ironman","spiderman","hanuman","antman","superman"];
let find = prompt("Enter name of super hero to find .");
if(arr2.includes(find)){
    console.log(`${find} this super hero exist in my universe `);
    alert(`${find} this super hero exist in my own universe`);
}else {
    console.log("No this super hero dosent exist");
}

