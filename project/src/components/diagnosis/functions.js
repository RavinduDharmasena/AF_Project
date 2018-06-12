const DiagnosisSchema = mongoose.model('diagnosis');
const mongoose = require('./db');

module.exports.addDiagnosis = function (diagnosis, callback) {
    let patientid = diagnosis.patientid;
    let complaints = diagnosis.complaints;
    let allergies = diagnosis.allergies;
    let phyexams = diagnosis.phyexams;
    let treatments = diagnosis.treatments; //**************
    let presdrougs = drugs.drugid; //**********************


    if(patientid == undefined || complaints == undefined || allergies == undefined || phyexams == undefined || treatments == undifined ){
        callback("All Fields are required ");
        return;
    }

    let newDiagnosis = new DiagnosisSchema({
        patientid:patientid,
        complaints:complaints,
        allergies:allergies,
        phyexams:phyexams,
        treatments:treatments,
        presdrougs:presdrougs
    });

    module.exports.getDiagnosis = function (callback) {
        DiagnosisSchema.find().exec().then(function(data){
            callback(null, data);
        }).catch(function (err) {
            callback(err);

        })

    }
}