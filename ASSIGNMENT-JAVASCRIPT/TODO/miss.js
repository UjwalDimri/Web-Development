// function saveToDb(data){
//     return new Promise ((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random()*10) +1
//         if(internetSpeed > 4){
//             resolve("Succedd:Data is Saved");
//         }else {
//             reject("Rejected : Internet Speed is not good to proceed");
//         }
//     });
// }
// saveToDb("ImUJwalDimri")
//   .then(() => {
//     console.log("Data Saved");
//   })
//   .catch(() => {
//     console.log("Data is not saved Rejected ");
//   });
// 
// Api -Application Programming Interface
let url = "https://catfact.ninja/fact";

async function getFacts() {
   try {
    let res = await fetch(url);
    let data1 = await res.json();
    console.log("Data 1 : Fetched");
    console.log(data1);
    let h1 = document.querySelector("h1");
    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log("Data 2 : Fectched");
    h1.innerHTML=`<b>Some Random Facts</b><br>${data1.fact}<br>${data2.fact}`;
   }catch (error){
    console.log("Error:",e);
   }
}
getFacts(url);
     
     let h1 = document.querySelector("h1");

  function colorChange(color,delay) {
    return new Promise ((resolve,reject) => {
      setTimeout(() => {
        h1.style.color=color;
        resolve("Success : Color changed");
      },delay);
    });
  }
   colorChange("red",1000)
     .then((result) => {
          console.log("Color Changed to red",result);
          return colorChange("orange",1000);
     })
     .then((result) => {
         console.log("color Changed to orange",result);
         return colorChange("green",1000);
     })
     .then((result) => {
        console.log("color change to green",result);
        return colorChange("yellow",1000);
     })
     .then((result) => {
      console.log("Color changed To yellow",result);
      return colorChange("blue",1000);
     })
     .then((result) => {
      console.log("Color Changed To blue",result);
      
     });


  