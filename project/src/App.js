import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
        <div>
            <div>
                <p>Header</p>
            </div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to="/user">Overview</Link></li>
                        <li><a href="#">Patient Registration</a></li>
                        <li><a href="#">Diagosis</a></li>
                        <li><a href="#">Payment</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <input type="button" className="btn btn-danger" value="Log Out"/>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}

export default App;
