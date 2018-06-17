'use strict'

const Express = require('express');
const Router = Express.Router();
const Controller = require('../Controller/paymentController');

Router.post('/addPayment',function (req,res) {
    Controller.addPayment(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.put('/updatestatus/:id',function(req,res){
    Controller.updateStatus(req.params.id,req.body).then(function(response){
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

module.exports = Router;