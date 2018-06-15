const express = require('express');
const router =express.Router();
const functions = require('./functions');
const mongoose =require('./db');



router.post('/diagnosis', function (req, res){
    let diagnosis ={

        patientid: req.body.patientid,
        complaints: req.body.complaints,
        allergies: req.body.allergies,
        phyexams: req.body.phyexams,
        treatments: req.body.treatments,
        injectname:req.body.injectname,
        injectprice:req.body.injectprice,
        drugname:req.body.drugname,
        amount:req.body.amount

    };

    functions.addDiagnosis(diagnosis, function (err, data) {
        if(!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }

    })
});

router.get('/Diagnosis', function (req, res) {
    functions.getDiagnosis(function (err, data) {
        if(!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }

    });

});


router.get('/Diagnosis/:patientid', function(req, res) {


    functions.getDiagnosisBypatientid(req.params.patientid, function(err, data)
    {
        if(!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(400).send({"error":err});
        }
    });
});

router.put('./Diagnosis/:patientid', function(req, res){
    functions.updatebyPatientid(req.params.patientid, req.body , function(err, data) {
        if (!err) {
            res.status(200).send({"success": data});
        }
        else {
            res.status(400).send({"error": err});
        }
    })
});


router.delete('./Diagnosis/:patientid', (req,res)=>{
    functions.delete(req.params.patientid, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err =>{
        res.Status(err.status).send(err.message);
    })
});

module.exports = router;
