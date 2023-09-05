const express = require("express");

app= express();
app.get('/',(req,res)=>{
    res.send("Hello From Home page")
});

app.get('/about',(req,res)=>{
    res.send("Hello From about page")
});

app.get('/contract',(req,res)=>{
    res.send("Hello From contract page")
});



app.listen(8000,()=>{
    console.log("Server Running.....")
})