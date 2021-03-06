const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const Routes = require('./routes/routes');
const Cors = require('cors');
const PORT = 8000;

App.use(BodyParser.json());
App.use(Cors())
App.use('/',Routes);
App.listen(PORT,'localhost',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server started successfully on port " + PORT);
});