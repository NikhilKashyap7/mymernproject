const express = require('express');
const myapps = express.Router();
const myschimatype = require('../myschimatype/common');

myapps.get("/",(req,res)=>{
    res.send("Welcome to Express js");
});

myapps.get("/about",(req,res)=>{
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
    // console.log(adduser);


});

myapps.get("/singleuser/:id", async(req,res)=>{
    const {id} = req.params;
    const users = await myschimatype.findOne({_id:id});
        res.status(288).json(users);


})

myapps.delete("/deleterecord/:id", async(req,res)=>{
    const {id} = req.params;
    const del = await myschimatype.findByIdAndDelete({"_id":id});
    // console.log(del);
    res.status(256).json(del);
});

myapps.patch("/edituser/:id", async (req,res)=>{
    const {id} =req.params;
    const edit = await myschimatype.findByIdAndUpdate(id, req.body, { new: true});
    // console.log(edit);
    res.status(200).json(edit);
})


myapps.post("/login", async (req, res) => {
    const { email,pass } = req.body;
    if (email === "" || pass === "") {
        res.status(412).json({message: "Error email and pass", status: 420});
    }
    else{
        const logindetails = await myschimatype.findOne({ email: email});
        // console.log(logindetails);
        if (logindetails) {
            if (logindetails.email === email && logindetails.pass === pass){
                res.status(200).json({ message:"Welcome", status: 220, logindata:logindetails});

            }
            else {
                res.status(300).json({message: " Email and apssword don't match", status: 421});
            }
        }
        else{
            res.status(300).json({message: "error", status: 620});
         }
    }
});




module.exports = myapps;



