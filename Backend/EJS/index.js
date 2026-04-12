const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.send("HIIII");
});
app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs");
});
app.get("/ig/:username",(req,res) => {
    let {username} = req.params ;
    res.render("Instagram.ejs",{username});
});
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});