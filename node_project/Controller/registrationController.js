const Mongoose = require('../schema/schema');
const patientSchema = Mongoose.model('Registration');

var registrationController = function () {
    this.getPatientDetail = function (id) {
        return new Promise(function (resolve,reject) {
            patientSchema.findOne({_id:id , status:"admit"}).then(function (data) {
                resolve({status:200,data:data});
            })
        });
    },
    this.addPatient = function (object) {
        return new Promise(function (resolve,reject) {
            const patient = new patientSchema({
                _id : object.obj._id,
                fname : object.obj.fname,
                age : object.obj.age,
                admitted_date : Date.now(),
                discharged_date : Date.now(),
                registered : object.obj.registered,
                status : object.obj.status
            });

            patient.save().then(function () {
                resolve({status:200,message:"Patient Object saved"});
            }).catch(function (reason) {
                reject({status:500,message:reason});
                console.log("{status:500,message:" + reason + "}");
            })
        })
    },
    this.getMaxId = function () {
        return new Promise(function (resolve, reject) {
            patientSchema.findOne({},'_id').sort('-_id').then(function (value) {
                resolve({status:200,data : value});
            }).catch(function (reason) {
                reject({status:404,message:"No id available"});
            })
        });
    },
    this.getUnregisteredPatients = function () {
        var unPatients = [];
        return new Promise(function (resolve,reject) {
            patientSchema.find().exec().then(function (value) {
                value.forEach(function (item) {
                    if(item.registered=='false'){
                        unPatients.push(item);
                    }
                })
                resolve({status:200,data : unPatients});
            }).catch(function () {
                reject({status:404, message: "No data available"})
            })
        });
    },
    this.fullRegistration = function (_id,object) {
        console.log(object);
        return new Promise(function (resolve,reject) {
            patientSchema.update({_id: _id},object.obj).then(function (value) {
                resolve({status:200,message:"Object Updated Successfully"});
            }).catch(function (reason) {
                reject({status:404, message: reason})
            })
        });
    },
    this.getPatient = function (_id) {
        return new Promise(function (resolve,reject) {
            patientSchema.findOne({_id: _id}).exec().then(function (value) {
                resolve({status: 200, data: value});
                console.log(value);
            }).catch(function () {
                reject({status:404,message:"No data available"});
            })
        });
    },
	this.getAdmittedPatient = function () {
		return new Promise(function (resolve,reject) {
			patientSchema.find({status: "admit"}).exec().then(function (value) {
				resolve({status: 200, data: value});
			}).catch(function () {
				reject({status:404,message:"No data available"});
			})
		});
	}
}

module.exports = new registrationController();