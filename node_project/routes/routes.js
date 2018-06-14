const UserRoute = require('./user.route');
const RegistrationRoute = require('./registration.route');
const PaymentRoute = require('./payment.route');
const Express = require('express');
const Route = Express.Router();

Route.use('/user',UserRoute);
Route.use('/registration',RegistrationRoute);
Route.use('/payment',PaymentRoute);

module.exports = Route;