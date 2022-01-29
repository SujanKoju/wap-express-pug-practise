const express = require('express');
const path = require('path');
const calculatorService = require('./calculatorService')
const app = express();


app.use(express.urlencoded());

app.set('view engine', 'pug');

app.get("/test", (req, res) => {
    res.render('test', {name: 'sujan'});
});
/*
let alwaysRunningMiddleware =(req,res,next)=>{
    console.log("--- ALWAYS RUNNING MIDDLEWARE ---");
    next();
}
*/


app.get("/calculator", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/calculator", (req, res) => {
    let result = calculatorService.getResult(req);
    res.render('result', {result: result});
});


app.listen(8000, () => {
    console.log(" --- SERVER IS UP ---");
});
