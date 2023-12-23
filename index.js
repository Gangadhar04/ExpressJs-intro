const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send(`Today is a Good day`);
});

app.get('/date',(req,res)=>{
    const date =new Date();
    res.send(`Todays Date is ${date}`);
});

app.get('/page',(req,res)=>{
res.sendFile('./page.html', { root:__dirname });
});

app.listen(3000);