const express = require('Express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const injectSchema = new Schema({
    _id:String,
    injectname:String,
    injectprice:Number

});

const drugs = new Schema({
    _id:String,
    drugname : String,
    amount:Number
});


const diagSchema = new Schema({

    patientid:String,
    complaints:String,
    allergies:String,
    phyexams:String,
    treatments:String,
    injectname:String,
    injectprice:Number,
    drugname:String,
    amount:Number


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