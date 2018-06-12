import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router,browserHistory,Route} from 'react-router';
import Error from "./Error";
import Handler from './components/common/Handler/Handler';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Handler}></Route>
        <Route path="*" component={Error}></Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
