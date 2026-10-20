const express = require(`express`);
const app = express();
const ExpressError = require("./ExpressError");
const port = 8080;


const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
}
app.get("/api",checkToken,(req,res) => {
    res.send("data");
});

app.use((req,res,next) => {
    console.log('time:',Date.now());
});

app.use((req,res,next) => {
    req.responseTime = new Data (Data.now()).tostring(),
    console.log(req.method,req.path,req.responseTime,req.hostname);
    next();
});

app.use("/random",(req,res,next)=> {
    console.log("I am only random");
});

app.get("/admin",(req,res) => {
    throw new ExpressError(403,"Access to admin  is forbidden")
})

app.listen(port,() => {
    console.log(`App is listening to port ${port}`);
});