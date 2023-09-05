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

// Json response ...........................
app.get('/four',(req,res)=>{
let myJSONArray =[
    {
        name:"Shawon",
        city:"Dhaka",
        phn:"123456"
    },
    {
        name:"Sazid",
        city:"Dhaka",
        phn:"123456"
    },
    {
        name:"Fuad",
        city:"Dhaka",
        phn:"123456"
    }
]
res.json(myJSONArray);
});
// Response Download.......................
app.get('/five',(req,res)=>{
res.download("./upload/IMG_4446.JPG");
})
app.listen(8000,()=>{
    console.log("Server Running.....")
})