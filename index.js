const express = require("express");

app= express();

// app.get('/',(req,res)=>{
//     res.send("Hello From Home page")
// });

// app.post('/about',(req,res)=>{
//     res.send("Hello From about page")
// });

// app.put('/contract',(req,res)=>{
//     res.send("Hello From contract page")
// });
// simple string response...................
// res.send()---->response Body
// res.end()----->response Ending point

app.post('/one',(req,res)=>{
    res.send("Simple string response")
});

app.put('/two',(req,res)=>{
    res.end(" Simple String response")
});

// response code manupulated................

app.get('/three',(req,res)=>{
    res.status(404).end()
});


app.listen(8000,()=>{
    console.log("Server Running.....")
})