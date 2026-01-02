let colorOfLight = "Red";

//traffic light system
if (colorOfLight === "Red"){
    console.log("You Have to Wait/Stop");
}
else if (colorOfLight === "Yellow"){
    console.log("Light Is going to be red plsease be ready");
}
else if (colorOfLight === "Green"){
    console.log("Go GO GO as light is green");
}

let size;

if (size==="Xl"){
    console.log(250);
}
else if (size==='L'){
    console.log(200);
}
else if (size==='M'){
    console.log(100);
}
else if (size==='S'){
    console.log(50);
}
else {
    console.log("Invalid Size");
}

let str= "abcd";
if ((str.length>3)&&(str[0]=='a')){
    console.log("This is a good string");
}
else{
    console.log("Not a good string");
}

let Day=1;
switch(Day){
    case 1 :
        console.log("Today is Monday");
        break;
    case 2 :
        console.log("Today is Tuesday");
        break;
    case 3 :
        console.log("Today is Wednesday");
        break;
    case 4 :
        console.log("Today is Thrusday ");
        break;
    case 5 :
        console.log("Today is Friday ");
        break;
    case 6 :
        console.log("Today is Saturday");
        break;
    case 7 :
        console.log("Today is Sunday");
        break;
    default :
        console.log("Enter a valid Number between 1 to 7");
}
// Assignment -2 
// question=1
let num=10;
if (num%10==0){
    console.log("Good");
}
else {
    console.log("Bad");
}
// question-2
let name= prompt("Enter Your Name");
let age = prompt("Enter Your age");
alert(`${name} is ${age} year old `);
// question-3
let quater=1;
switch(quater){
    case 1 :
      console.log("MonthsinQuarter1:January,February,March ");
      break;
    case 2 :
      console.log("Months in Quarter2:April,May,June");
      break;
    case 3:
      console.log("MonthsinQuarter3:July,August,September");
      break;
    case 4:
      console.log("MonthsinQuarter4:October,November,December");
      break;
    default:
        console.log("A year have only 4 quaters so please enter value between 1 to 4") 
}
//Question 4 
let golden="Alphabet";

if ((golden.length>5) && (golden[0]==='a'||golden[0]==='A')){
    console.log("This is a golden String");
}
else {
    console.log("This is not a golden string");
}
//question 5
let a=2,b=5,c=10;

if ((a>b)&&(a>c)){
    console.log(`The largest: ${a}`);
} else if ((b>a)&&(b>c)){
    console.log(`The Largest :${b}`);
}else if ((c>a)&&(c>b)){
    console.log(`The Largest :${c}`);
}else {
    console.log("All ARE EQUAL");
}
//question6 
let d=32;
let e=47852;
if (d%10===e%10){
    console.log(`Have same last digit:${d%10}`);
}
<<<<<<< HEAD
=======
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
>>>>>>> 39a44958a96e7ac03d549a192a05890d17a8b464
