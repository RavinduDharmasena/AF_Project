const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

var UserSchema = new Schema({
    userID:{
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
    }
});

Mongoose.model('User',UserSchema);

Mongoose.connect('mongodb://localhost:27017/pcudb',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log("Connected to MongoDB Database");
})

module.exports = Mongoose;