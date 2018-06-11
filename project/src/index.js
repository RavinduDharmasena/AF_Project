import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router,browserHistory,Route} from 'react-router';
import Error from "./Error";
import UserHandler from './components/user/Handler/UserHandler';
import Diagosis from "./components/diagnosis/Diagosis";
import Registration from "./components/registration/Registration";
import Payment from "./components/payment/Payment";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={UserHandler}></Route>
        <Route path="/diagnosis" component={Diagosis}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="*" component={Error}></Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
