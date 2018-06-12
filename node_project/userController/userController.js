const Mongoose = require('../schema/schema');
const UserSchema = Mongoose.model('User');

var userController = function(){
    this.addUser = function (object) {
        return new Promise(function (resolve,reject) {
            console.log("_id : " + object.userID);
            const User = new UserSchema({
                userID:object.userID,
                username:object.username,
                password:object.password
            }) ;

            User.save().then(function () {
                resolve({status:200,message:"Object saved"});
                console.log("{status:200,message:Object saved}");
            }).catch(function (reason) {
                reject({status:500,message:reason});
                console.log("{status:500,message:" + reason + "}");
            })
        })
    },
    this.getUserbyUsernameAndPassword = function (username,password) {
        return new Promise(function (resolve,reject) {
           UserSchema.find({username:username,password:password}).exec().then(function (value) {
               resolve({status:200,data:value});
           }).catch(function (reason) {
               reject({status:404,message:"No data available"});
           })
        });
    }
}

module.exports = new userController();