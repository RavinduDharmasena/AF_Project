const Mongoose = require('../schema/schema');
const patientSchema = Mongoose.model('Registration');

var registrationController = function () {
    this.getAPatientDetail = function (id) {
        return new Promise(function (resolve,reject) {
            patientSchema.findOne({_id:id , status:"admit"}).then(function (data) {
                resolve({status:200,data:data});
            }).catch(function (reason) {
                reject({status:404,message:"Object Not Found"});
            })
        });
    }
}

module.exports = new registrationController();