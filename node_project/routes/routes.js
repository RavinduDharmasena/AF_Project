const UserRoute = require('./user.route');
const RegistrationRoute = require('./registration.route');
const Express = require('express');
const Route = Express.Router();

Route.use('/user',UserRoute);
Route.use('/registration',RegistrationRoute);


module.exports = Route;