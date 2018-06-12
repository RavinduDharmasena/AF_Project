const expree = require('express');
const functions = require('./functions');

const router =express.Router();

router.post('/Diagnosis', function (req, res){
    let Diagnosis ={
        patientid: req.body.patientid,
        complaints: req.body.complaints,
        allergies: req.body.allergies,
        phyexams: req.body.phyexams,
        treatments: req.body.treatments,
        presdrougs: req.body.presdrougs
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