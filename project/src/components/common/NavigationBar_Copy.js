import React,{ Component } from 'react'
import { Link } from 'react-router';

class NavigationBar extends Component{
    render(){
        var logOutButton
        if(this.props.logged){
            logOutButton = <input type="button" className="btn btn-danger" value="Log Out" onClick={this.props.setLogged}/>
        }

        return(
            <div>
                <div>
                    <p>Header</p>
                </div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Overview</Link></li>
                            <li><Link to="/registration">Patient Registration</Link></li>
                            <li><Link to="/diagnosis">Diagnosis</Link></li>
                            <li><Link to="/payment">Payment</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {logOutButton}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavigationBar;