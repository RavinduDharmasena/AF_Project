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
    patientid:String,
    complaints:String,
    allergies:String,
    phyexams:String,
    treatments:[injectSchema][drugs],

});



mongoose.model('diagnosis', diagSchema);
mongoose.model('drugs', injectSchema);
mongoose.model('injections', drugs);

mongoose.connect('mongodb://localhost:27017/pcudb' , (err)=>{
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('connected to DB');

});

module.exports =mongoose;