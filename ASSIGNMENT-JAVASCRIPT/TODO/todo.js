let body = document.querySelector("body");
let btn = document.querySelector("#task");
let items = document.querySelector("li")
let list = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click",function(){
    console.log("Clicked");
    let item = document.createElement("li");
    item.innerText=input.value;
    items.appendChild(item);
    input.value="";
    let delbtn = document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);
});
list.addEventListener("click",function(event){
    if (event.target.nodename="button"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
});
