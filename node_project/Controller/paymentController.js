'use strict'

const Mongoose = require('../schema/schema');
const PaymentSchema = Mongoose.model('Payment');
const PatientSchema = Mongoose.model('Registration');

var paymentController = function () {

    this.addPayment = function (object) {
        return new Promise(function (resolve, reject) {
            const payment = new PaymentSchema({
                _id : object.billid,
                billamount : object.billamount,
                type : object.type,
                cardtype : object.cardtype,
                cardno : object.cardno,
                cvc : object.cvc,
                expdate : object.expdate,
                billdate : Date.now()
            })
            payment.save().then(function () {
                resolve({status:200,message:"Payment Object saved"});
            }).catch(function (reason) {
                reject({status:500,message:reason});

            })
        })
    },
    this.updateStatus = function (id,body) {
        return new Promise(function (resolve, reject) {
            PatientSchema.update({_id: id},body).then(function (value) {
                resolve({status:200,message:"Status updated successfully"});
            }).catch(function (reason) {
                reject({status:500, message: reason});
            })
        })
    }

}

module.exports = new paymentController();