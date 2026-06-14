const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'webdev',
    password: '@Hanu-2430'
});
let getUser = () =>{
    return [
         faker.string.uuid(),
         faker.internet.username(),
         faker.internet.email(),
         faker.internet.password(),

    ];
};
// let users =[];
// for(let i = 1;i<=100;i++){
//     users.push(getUser());
// };
// let q = "INSERT INTO temp(id,username,email,password) VALUES ?";
// try{
// connection.query(q,[users],(err,result) => {
//          if (err) throw err;
//          console.log(result);
// });
// } catch(err){
//     console.log(err);
// }
app.get("/",(req,res)=>{
    let q = `SELECT count(*) FROM temp`;
    try{
    connection.query(q,(err,result) => {
            if (err) throw err;
            console.log(result["count(*)"]);
            let count = result[0]["count(*)"];
            res.render("home.ejs",{ count });
    });
    } catch(err){
        console.log(err);
        res.send(`ERROR IN DATABASE`);
    }
    // res.send("Welcome To Home Page");
});
app.get("/user",(req,res) => {
    let q = `SELECT * FROM temp`;
    try{
    connection.query(q,(err,result) => {
        let length = result.length;
        res.render("user.ejs",{result,length});
    });
   }catch(err){
    console.log(err);
    res.send(`Database ERROR OCCURED`);
   }
});
// Edit route
app.get("/user/:id/edit",(req,res)=>{
      let {id} = req.params;
      let q = `SELECT * FROM temp WHERE id = '${id}'`;
    try{
    connection.query(q,(err,result) => {
            if (err) throw err;
            console.log(result);
            res.render(`edit.ejs`,{result});
    });
    } catch(err){
        console.log(`ERROR IN DATABASE ${err}`);
    }
});
// update route
app.patch("/user/:id",(req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM temp WHERE id = '${id}' `;
    try{
    connection.query(q,(err,result) => {
            if (err) throw err;
            console.log(result);
            res.render(`edit.ejs`,{result});
    });
    } catch(err){
        console.log(`ERROR IN DATABASE ${err}`);
    }

});

app.listen(port,()=> {
      console.log(`App is lisenting on port ${port}`);
});
