// whatsapp demo (chat app -->> mongodb)
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");
const chat = require(`./models/chat.js`);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main().then(() =>{
    console.log(`connection is successfull`);
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
// let chat1 = new chat({
//     from:"neha",
//     to:"priya",
//     msg: "send me the notes",
//     created_at : new Date()
// });
// chat1.save().then((res) => console.log(res))
// .catch((err) => {console.log(err)});

app.get("/chats",async (req,res) => { // show all chats 
    let chats = await chat.find();
    res.render("index.ejs",{chats});
});
//new route
app.get("/chats/new",(req,res) => {
    res.render("new.ejs");
});
//create route 
app.post("/chats",(req,res) => {
    let {from,to,msg} = req.body;
    let newChat = new chat ({
         from:from,
         to:to,
         msg:msg,
         created_at: new Date()
    });
    newChat
    .save()
    .then(res => {console.log("chat was saved")})
    .catch((err) => {console.log(err)});
    res.redirect("/chats");
});
//Edit Route
app.get("/chats/:id/edit",async (req,res) => {
    let {id} = req.params;
    let Chat = await chat.findById(id);
    res.render("edit.ejs",{Chat});
});
//Update Route
app.put("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let {msg:newMsg} =req.body;
    console.log(newMsg);
    let updatedChat = await chat.findByIdAndUpdate(id, {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});
// Delete ROute
app.delete("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    res.redirect("/chats");
});
app.listen(8080,() => {
    console.log(`server is listening on port 8080`);
})