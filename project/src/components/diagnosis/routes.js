const express = require('express');
const functions = require('./functions');

const router =express.Router();

router.post('/Diagnosis', function (req, res){
    let Diagnosis ={
        patientid: req.body.patientid,
        complaints: req.body.complaints,
        allergies: req.body.allergies,
        phyexams: req.body.phyexams,
        treatments: req.body.treatments,

    };

    functions.addDiagnosis(Diagnosis, function (err, data) {
        if(!err){
            res.status(2000).send({"success":data});
        }
        else{
            res.status(4000).send({"error":err});
        }

    })
});

router.get('/Diagnosis', function (req, res) {
    functions.getDiagnosis(function (err, data) {
        if(!err){
            res.status(200).send({"success":data});
        }
        else{
            res.status(4000).send({"error":err});
        }

    });

});


router.get('/ :patientid', function(req, res, next) {
    var patientid = req.params.patientid;

    functions.getDiagnosisBypatientid(patientid, function(err, result)
    {
        if(err) { next(err); }
        res.json(result);
    });
});

router.put('./:patientid', (req, res) =>{
    functions.update(req.params.patientid, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err =>{
        res.Status(err.status).send(err.message);
    })
});


router.delete('./patientid', (req,res)=>{
    functions.delete(req.params.patientid, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err =>{
        res.Status(err.status).send(err.message);
    })
});

module.exports = router;
