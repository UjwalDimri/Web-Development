let max = prompt("Enter Maximum Number:");
let random = Math.floor(Math.random()*max )+ 1;
let guess = prompt("Welcome to the game !!Lets play !!\n Enter any number for guess:");

while(true){
    if (random==guess){
        alert(`Woooo.... You won congrats....!!! \n The Number is ${random}`);
        break;
    }else if (guess>random){
        guess=prompt("HINT:Its too larger make it smaller little bit:");
    }else if (guess<random){
        guess=prompt("HMMMm HINT :Its close but make it moreee dil mange moree.....!!!!");
    }else if (guess=="quit"){
        alert("Exitingggg......");
        break;
    }
}