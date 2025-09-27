const express = require("express");

const app = express();
app.listen(7777,()=>{
    console.log("Hello waiting for req");
});

app.use("/test",(req,res)=>{
    res.send("Hello from server1");
});

app.use("/ab?cd",(req,res)=>{
    res.send("Hello this is meghna we love u");
});

// app.use("/",(req,res)=>{
//     res.send("Hello from server");
// });



