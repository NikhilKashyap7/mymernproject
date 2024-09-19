const express = require("express");

require ('dotenv').config();
 
const myport = process.env.PORT || 7737

const myapps = express();
myapps.get("/",(req,res)=>{
    res.send("A very warm welcome to my project");
});

myapps.listen(myport,()=>{
    console.log(`The Server is running at port no. : ${myport}`)
})