const mongoose = require('./db');
const DiagnosisSchema = mongoose.model('diagnosis');

module.exports.addDiagnosis = function (diagnosis, callback) {

    let patientid = diagnosis.patientid;
    let complaints = diagnosis.complaints;
    let allergies = diagnosis.allergies;
    let phyexams = diagnosis.phyexams;
    let treatments = diagnosis.treatments;
    let injectname = diagnosis.injectname;
    let injectprice = diagnosis.injectprice;
    let drugname = diagnosis.drugname;
    let amount = diagnosis.amount;


    if (patientid == undefined || complaints == undefined || allergies == undefined || phyexams == undefined || treatments == undifined
        || injectname == undefined || injectprice == undefined || drugname == undefined || amount == undefined) {
        callback("All Fields are required ");
        return;
    }

    let newDiagnosis = new DiagnosisSchema({

        patientid: patientid,
        complaints: complaints,
        allergies: allergies,
        phyexams: phyexams,
        treatments: treatments,
        injectname: injectname,
        injectprice: injectprice,
        drugname: drugname,
        amount: amount


    });

    newDiagnosis.save(function (err, data) {
        if (err) {
            callback(err);
            return;
        }

        callback(null, "Successfully Added");
    })
}


module.exports.getDiagnosis = function (callback) {
    DiagnosisSchema.find().exec().then(function(data){
        callback(null, data);
    }).catch(function (err) {
        callback(err);

    })

}

module.exports.getDiagnosisBypatientid =function (patientid , callback) {
    //var id = mongoose.Types.ObjectId(patientid);
    DiagnosisSchema.find({ patientid:  patientid}).exec().then(function (data){
        callback(null,data);
    }).catch(function(err) {
        callback(err);
    })

}


module.exports.updatebyPatientid =function(patientid, updateData, callback) {
    DiagnosisSchema.update({patientid: patientid}, updateData).exec().then(function (err, updatedata) {
        if (err) {
            callback(err);
            return;
        }
        callback("Successfully updated");
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


