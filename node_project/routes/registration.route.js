
const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controller/registrationController');


Router.get('/getpatient/:id',function (req,res) {
   Controller.getAPatientDetail(req.params.id).then(function (response) {
       res.status(response.status).send(response.data);
   }).catch(function (reason) {
       res.status(response.status).send(null);
   })
});

module.exports = Router;