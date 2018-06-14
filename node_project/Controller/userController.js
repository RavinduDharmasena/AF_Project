const Mongoose = require('../schema/schema');
const UserSchema = Mongoose.model('User');
const LoginSchema = Mongoose.model('Login');

var userController = function(){
    this.addUser = function (object) {
        return new Promise(function (resolve,reject) {
            console.log("_id : " + object.userID);
            const User = new UserSchema({
                _id:object._id,
                username:object.username,
                password:object.password,
                name:object.name/*,
                lastLogin:null*/
            }) ;

            const Login = new LoginSchema({
                _id:object._id,
                lastLogin:null
            });

            User.save().then(function () {
                resolve({status:200,message:"User Object saved"});
                console.log("{status:200,message:Object saved}");
            }).catch(function (reason) {
                reject({status:500,message:reason});
                console.log("{status:500,message:" + reason + "}");
            });

            Login.save().then(function () {
                resolve({status:200,message:"Login Object saved"});
                console.log("{status:200,message:Object saved}");
            }).catch(function (reason) {
                reject({status:500,message:reason});
                console.log("{status:500,message:" + reason + "}");
            });
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
        },

        this.updateUser = function (id,object) {
            return new Promise(function (resolve,reject) {
                const Login = {
                    _id:object._id,
                    //username:object.username,
                    //password:object.password,
                    //name:object.name,
                    lastLogin:Date.now()//object.lastLogin
                }
                LoginSchema.update({_id:id},Login).then(function (value) {
                    resolve({status:200,message:"Object Updated Successfully"});
                }).catch(function (reason) {
                    reject({status:404,message:reason});
                })
            });
        },

        this.getUserLogin = function (id) {
            return new Promise(function (resolve,reject) {
                LoginSchema.find({_id:id}).exec().then(function (value) {
                    resolve({status:200,data:value});
                }).catch(function (reason) {
                    reject({status:404,message:"No data available"});
                })
            });
        }
}

module.exports = new userController();