const UserRoute = require('./user.route');
const Express = require('express');
const Route = Express.Router();

Route.use('/user',UserRoute);

module.exports = Route;