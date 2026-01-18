let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.innerText="Generate a Random Color";
body.append(h1);
let btn = document.createElement("button");
btn.innerText="Generate Color";
body.append(btn);
let div = document.createElement("div");
div.style.border="1px solid black";
div.style.width="500px";
div.style.height="500px";
div.innerText="This is your new color";
div.style.margin="auto";
body.append(div);

btn.addEventListener("click",function(){
          console.log("Color Generated");
          let h1 =document.querySelector("h1");
          let color = randomcolor();
          h1.innerText = color;
          let div = document.querySelector("div");
          div.style.backgroundColor = color;
});

function randomcolor(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


