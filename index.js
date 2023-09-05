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
});
// Response Redirect.......................

app.get('/Bangladesh',(req,res)=>{
    res.redirect("http://localhost:8000/India");
});

app.get('/India',(req,res)=>{
    res.send("This is India");
});

app.get('/Six',(req, res)=>{
    res.append("name","Shawon")
    res.append("city","Dhaka")
    res.append("age","25")
    res.status(201).end("Hello World")
});

// Response Set Cookies...............

app.get('/Seven',(req,res)=>{
    res.cookie("name","Jahid")
    res.cookie("City","Dhaka")
    res.cookie("age","22")
    res.end("Cookies set sucess")
});
// Response Clear Cookies.........................
app.get('/Eight',(req,res)=>{
    res.clearCookie("name")
    res.clearCookie("City")
    res.clearCookie("age")

    
    res.end("Cookies clear sucess")
});
app.listen(8000,()=>{
    console.log("Server Running.....")
})