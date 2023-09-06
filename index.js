const bodyParser = require("body-parser");
const express = require("express");

app= express();
app.use(bodyParser.json());

// Post application-json.....................
app.post('/',(req,res)=>{
 let JSONData = req.body;
//  let JSONString = JSON.stringify(JSONData);
let name = JSONData['name'];
let city =JSONData['city'];
 res.send(name+ " " +city);
});

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

// response status code manupulated................

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

//  Get Request.....................
// app.get('/',(req,res)=>{
// res.send("Simple Get Request");
// });

// Get Request With URL Query.................

// app.get('/',(req,res)=>{
//  let fristName= req.query.fristName;
//  let lastName=  req.query.lastName;
//  res.end(fristName + " "+ lastName);
// });

// Working With Get Request Header................

app.get('/',(req,res)=>{
    let fristName = req.header('fristName');
    let lastName  =  req.header('fristName');
    let UserAgent = req.header('User-Agent')
    res.end(UserAgent);
   });


//    Post Request............................
//  app.post('/',(req,res)=>{
//  res.send("This is Simple Post Request");
//  });

//  Post Request With URL Query...................

// app.post('/',(req,res)=>{
// let fristName = req.query.fristName;
// let lastName = req.query.lastName;
// res.end(fristName+" "+lastName);

// });

//  Post Request With Header Properties..........................

// app.post('/',(req,res)=>{

//     let userName = req.header('userName');
//     let password = req.header('password');
    

//     res.send("username:"+ userName + " passwoprd: "+password );
// });
app.listen(8000,()=>{
    console.log("Server Running.....")
})