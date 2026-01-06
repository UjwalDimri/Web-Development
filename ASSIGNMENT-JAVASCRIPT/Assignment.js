// PART -1 AND PART-2
console.log("Part 1 and Part - 2 ");
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
console.log("--------------------------------------------------------------------------");