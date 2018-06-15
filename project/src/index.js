import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router,browserHistory,Route} from 'react-router';
import Error from "./Error";
import User from "./components/user/User";
import Diagosis from "./components/diagnosis/Diagosis";
import Registration from "./components/registration/Registration";
import Payment from "./components/payment/Payment";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={User}></Route>
        <Route path="/diagnosis" component={Diagosis}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="*" component={Error}></Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
