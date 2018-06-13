const express = require('Express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const injectSchema = new Schema({
    injectid:String,
    amt:Number

});

const drugs = new Schema({
    drugid : String,
    qty:Number
});

const diagSchema = new Schema({
    patientid:patientid,
    //patientid:{type: mongoose.Schema.Types.ObjectId, ref: 'patient'},
    complaints:String,
    allergies:String,
    phyexams:String,
    treatments:String
    treatments:[{injections :{ type: mongoose.Schema.Types.ObjectId, ref: 'injections',qty:Number, Total:Number},presdrugs:{ type: mongoose.Schema.Types.ObjectId, ref: 'drugs' ,qty:Number, Total:Number}}]

});



mongoose.model('injections', drugs);
mongoose.model('drugs', injectSchema);
mongoose.model('diagnosis', diagSchema);

mongoose.connect('mongodb://localhost:27017/pcudb' , (err)=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('connected to DB');

});

module.exports =mongoose;