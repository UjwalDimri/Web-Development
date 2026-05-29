const express = require("express");
const app = express();

let port = 5355;
app.listen(port,() => {
    console.log(`app listening on port ${port}`)
});

app.use((req,res)=>{
    console.log("New incoming request");
    let code = "<h1>Hi I am Ujwal Dimri</h1><ul><li>a for apple</li><li>b for ball</li>/ul>";
    res.send(code);
});