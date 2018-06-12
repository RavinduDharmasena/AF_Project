const Controller = require('../userController/userController');
const Express = require('express');
const Router = Express.Router();

Router.post('/',function (req,res) {
    Controller.addUser(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

Router.get('/:username/:password',function (req,res) {
    Controller.getUserbyUsernameAndPassword(req.params.username,req.params.password).then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
});

module.exports = Router;