console.log("PART - 9");
// Practice question 
// Add the following elements to the conatiner using only javascript and the DOM methods.
// i) a<p> with red text that says "Hey I'm red!"
// ii) an <h3> with blue text that says "I'm a blue h3!"
// iii) a <div> with a black border and the pink background color with the following elements inside of it :
//.     * another <h1> that says "I'm in a div" 
//      * a <p> that says "ME TOO!"
let body = document.querySelector('body');
let p = document.createElement("p");
p.style.color= "red";
p.innerHTML="Hey I'm red";
body.append(p);

let h3 = document.createElement("h3");
h3.innerHTML="I'm blue h3";
h3.style.color="blue";
body.append(h3);

let div = document.createElement("div");
div.style.backgroundColor="pink";
div.style.borderColor="black";
div.style.borderWidth= "100px";
body.append(div);
let h1 = document.createElement("h1");
let p1 = document.createElement("p");
h1.innerText="I'm in a div";
p1.innerText="Me Too";
div.append(h1);
div.append(p1);

console.log("Assignment-9");
//ASSIGNMENT-9
// Qs1. Create a new input and button element on the page using Java Script only . Set the text of button to “Clickme”;
let btn = document.createElement("button");
btn.innerText="Click Me";
body.append(btn);

// Qs2 . Add following attributes to the element : 
// - Change placeholder value of input to “username” 
// - Change the id of button to “btn"
let input = document.createElement("input");
btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Qs3 . Access the btn using the query Selector and button id.Changethebuttonbackgroundcolortoblueandtextcolortowhite.


