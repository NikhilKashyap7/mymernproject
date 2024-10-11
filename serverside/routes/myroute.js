const express = require('express');
const myapps = express.Router();
const myschimatype = require('../myschimatype/common');

myapps.get("/",(req,res)=>{
    res.send("Welcome to Express js");
});

myapps.get("/about",(req,rees)=>{
    res.send("Welcome about js");
});

myapps.get("/alldata",async(req,res)=>{
    const alld = await myschimatype.find();
    res.send(alld);
});


myapps.post("/registoruser",async(req,res)=>{
    const {email,fullname,phone,course,dob,pass,gender} = req.body;
    const adduser = new myschimatype({
        email,fullname,phone,course,dob,pass,gender
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);


});


myapps.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
        const del = await myschimatype.findByIdAndDelete({"_id":id});
        console.log(del);
        res.status(256).json(del);
});


myapps.get("/singleuser/:id", async(req,res)=>{
    const {id} = req.params;
    const users = await myschimatype.findOne({_id:id});
        res.status(288).json(users);


})
module.exports = myapps;



