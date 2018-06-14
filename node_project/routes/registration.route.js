
const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controller/registrationController');


Router.get('/getpatient/:id',function (req,res) {
   Controller.getPatientDetail(req.params.id).then(function (response) {
       res.status(response.status).send(response.data);
   }).catch(function (reason) {
       res.status(response.status).send(null);
   })
});

Router.post('/addPatient',function (req,res) {
    Controller.addPatient(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/getMaxId',function (req,res) {
    Controller.getMaxId().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/getUnregisteredPatients',function (req,res) {
    Controller.getUnregisteredPatients().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/fullRegistration/:_id',function (req,res) {
    Controller.fullRegistration(req.params._id,req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/getPatients/:_id',function (req,res) {
    Controller.getPatient(req.params._id).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

module.exports = Router;