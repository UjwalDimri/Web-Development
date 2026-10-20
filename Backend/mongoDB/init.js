const mongoose = require("mongoose");
const chat = require(`./models/chat.js`);
main().then(() =>{
    console.log(`connection is successfull`);
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



let allChats = [
    {
        from:"Ujwal",
        to:"preeti",
        msg:"Hello",
        created_at: new Date(),
    },
    {
        from:"Ujwal",
        to:"preeti",
        msg:"Hello",
        created_at: new Date(),
    },
    {
        from:"Ujwal",
        to:"preeti",
        msg:"Hello",
        created_at: new Date(),
    },
    {
        from:"Ujwal",
        to:"preeti",
        msg:"Hello",
        created_at: new Date(),
    },
];
chat.insertMany(allChats);