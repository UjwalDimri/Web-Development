const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'webdev',
    password: '@Hanu-2430'
});
let q = `SELECT * FROM temp`;
    try{
    connection.query(q,(err,result) => {
        console.log(result);
        // res.render("user.ejs",{result});
    });
   }catch(err){
    console.log(err);
    res.send(`Database ERROR OCCURED`);
   }
