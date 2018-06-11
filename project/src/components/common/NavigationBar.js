import React,{ Component } from 'react'
import { Link } from 'react-router';

class NavigationBar extends Component{
    render(){
        return(
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
                            <li class="active"><Link to="/">Overview</Link></li>
                            <li><Link to="/registration">Patient Registration</Link></li>
                            <li><Link to="/diagnosis">Diagnosis</Link></li>
                            <li><Link to="/payment">Payment</Link></li>
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

export default NavigationBar;