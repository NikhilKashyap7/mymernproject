const mongoose = require('mongoose');

//Defining the Schema or the data type for student data
const mynew = new mongoose.Schema({
    email:{
        type:String
    },
    fullname:{
        type:String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    course:{
        type:String
    },
    pass:{
        type:String
    },
    gender:{
        type:String
    }    
    
    });
    
    const myschimatype = new mongoose.model("studentdata",mynew);
    module.exports = myschimatype