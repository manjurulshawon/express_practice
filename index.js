const express = require("express");

app= express();
app.get('/',(req,res)=>{
    res.send("Hello From Express")
})

app.listen(8000,()=>{
    console.log("Server Running.....")
})