const DiagnosisSchema = mongoose.model('diagnosis');
const mongoose = require('./db');

module.exports.addDiagnosis = function (diagnosis, callback) {
    let patientid = diagnosis.patientid;
    let complaints = diagnosis.complaints;
    let allergies = diagnosis.allergies;
    let phyexams = diagnosis.phyexams;
    let treatments = diagnosis.treatments;




    if(patientid == undefined || complaints == undefined || allergies == undefined || phyexams == undefined || treatments == undifined ){
        callback("All Fields are required ");
        return;
    }

    let newDiagnosis = new DiagnosisSchema({
        patientid: DiagnosisSchema.patientid,
        complaints:DiagnosisSchema.complaints,
        allergies:DiagnosisSchema.allergies,
        phyexams:DiagnosisSchema.phyexams,
        treatments:DiagnosisSchema.treatments

    });

    module.exports.getDiagnosis = function (callback) {
        DiagnosisSchema.find().exec().then(function(data){
            callback(null, data);
        }).catch(function (err) {
            callback(err);

        })

    }

    module.exports.getDiagnosisBypatientid =function (patientid) {
        return new Promise((resolve, reject)=> {

        var id = mongoose.Types.ObjectId(patientid);
        DiagnosisSchema.find({ patientid:  id}).exec().then(data =>{
            resolve({'status': 200, 'message':'get single data', 'data': data});
        }).catch(err =>{
            reject({'status': 404, 'message' : 'err :-' +err});
        })

    })
    }

    module.exports.update =function(id, updateData){
        return new Promise((resolve, reject)=> {

            var id = mongoose.Types.ObjectId(patientid);
            DiagnosisSchema.update({ patientid:  id},updateData).then(() =>{
                resolve({'status': 200, 'message':'get single data', 'data': data});
            }).catch(err =>{
                reject({'status': 404, 'message' : 'err :-' +err});
            })

        })
        }

    module.exports.delete =function(id){
        return new Promise((resolve, reject)=> {

            var id = mongoose.Types.ObjectId(patientid);
            DiagnosisSchema.remove({ patientid:  id}).then(() =>{
                resolve({'status': 200, 'message':'get single data', 'data': data});
            }).catch(err =>{
                reject({'status': 404, 'message' : 'err :-' +err});
            })

        })
    }


}