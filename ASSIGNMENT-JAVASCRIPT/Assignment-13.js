let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let url3 = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener ("click",async ()=>{
   let fact = await getFacts(url);
   let p = document.querySelector("#result");
   p.innerText= fact;
});

async function getFacts(url) {
 try{
     let res = await axios.get(url);
     return res.data.fact;
 }
 catch(error){
    console.log("Error Ouccured");
 }
}
let btn2= document.querySelector("#btnforimg");
btn2.addEventListener("click",async () => {
    let link = await getimage(url2);
    let img = document.querySelector("#img");
    img.setAttribute("src",link);
    console.log(link);
});
async function getimage(url2) {
    try{
        let image = await axios.get(url2);
        return image.data.message;
    }catch (error){
        console.log("Got an Error");
        return '/' ;
    }
    
}
// let input = document.querySelector("#countryname");
// let country=input.value;
// console.log(country);
let btn3 = document.querySelector("#btnforcollege");
btn3.addEventListener("click",async () =>{
    let input = document.querySelector("#countryname");
    let country=input.value;
    // input.value="";
    let colArr = await getcollege(country);
    showCollege(colArr);

});
async function showCollege(colArr) {
   let list = document.querySelector("#list");
   list.innerHTML="";
   for(let col of colArr){
    let li = document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);
   }
}

async function getcollege(country){
    try {
     let name = await axios.get(url3 + country);
     return name.data 
    }catch(error){
        console.log(`${error},error generated`);
        return [];
    }
}