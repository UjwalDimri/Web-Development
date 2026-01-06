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
console.log("--------------------------------------------------------------------------");