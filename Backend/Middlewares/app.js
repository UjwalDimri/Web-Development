const express = require(`express`);
const app = express();

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
})