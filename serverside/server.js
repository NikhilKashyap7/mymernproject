'Access-Control-Allow-origin'
const express = require("express");
const myapps = express();
require ('dotenv').config();
 const myroute = require('./routes/myroute');
 const cors = require('cors');
const myport = process.env.PORT || 7737
require('./database/connection');


myapps.use(express.json());
myapps.use(cors());
myapps.use(myroute)


// myapps.get("/",(req,res)=>{
//     res.send("A very warm welcome to my project");
// });

myapps.listen(myport,()=>{
    console.log(`The Server is running at port no. : ${myport}`)
})