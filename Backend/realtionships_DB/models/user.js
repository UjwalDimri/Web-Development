const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
   .then(() => console.log("connection successful"))
   .catch((err) => console.log(err));


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    addresses:[
        {
            location:String,
            city:String,
        },
    ],
});

const User = mongoose.model("User",userSchema);

const addUser = async() => {
    let user1 = new User({
        username:"sherlockholmes",
        addresses:[{
            _id:false,
            location:"1118 Ganga Vihar",
            city:"Rishikesh"
        }]
    });
    user1.addresses.push({location:"P32 Wallstreet",city:"London"});
    let result = await user1.save();
    console.log(result);
}

addUser();