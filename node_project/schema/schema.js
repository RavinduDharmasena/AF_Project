const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

var UserSchema = new Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }/*,
    lastLogin:{
        type:Date,
        required:false
    }*/
});

var LoginSchema = {
    _id:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        required:false
    }
}

const PatientSchema = new Schema({
    _id : {
        type : Number,
        require : true
    },

    fname : {
        type : String,
        require : true
    },

    lname : {
        type : String,
        require : false
    },

    age : {
        type : Number,
        require : true
    },

    gender : {
        type : String,
        require : true
    },

    custodian_name : {
        type : String,
        require : false
    },

    custodian_contact : {
        type : Number,
        require : false
    },

    nic : {
        type : String,
        require : false
    },

    ward : {
        type : Number,
        require : false
    },

    status : {
        type : String,
        require : false
    },

    admitted_date : {
        type : Date,
        require : false
    },

    discharged_date : {
        type : Date,
        require : false
    },

    priority_level : {
        type : String,
        require : false
    },

    registered : {
        type : String,
        require : true
    }

});

Mongoose.model('Registration',PatientSchema);
Mongoose.model('User',UserSchema);
Mongoose.model('Login',LoginSchema);
Mongoose.connect('mongodb://localhost:27017/pcudb',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log("Connected to MongoDB Database");
})

module.exports = Mongoose;