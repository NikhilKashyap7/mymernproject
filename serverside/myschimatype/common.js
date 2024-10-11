const mongoose = require('mongoose');

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