let task =prompt("what to want to do");
let list = [];
while(task!="quit"){
    if (task === "list"){
        console.log("----------------------");
       for(let i=0;i<list.length;i++){
          console.log(list[i]);
       }
    }
    else if (task === "add"){
        let add = prompt("What you want to add so please enter that you want to add :");
        list.push(add);
        console.log("Task Added");
    }
    else if(task === "delete"){
        list.pop();
    }
    else {    
        console.log("Invalid Command");
    }
    task = prompt("Do you want to continue please enter the function form the given menu or else enter quit if you don't want to continue :");

}