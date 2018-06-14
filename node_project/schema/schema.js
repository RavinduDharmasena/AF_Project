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