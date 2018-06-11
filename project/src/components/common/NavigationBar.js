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
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a class="navbar-brand" href="#">Logo</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <li><Link to="/" className="nav-link">Overview</Link></li>
                        </li>
                        <li class="nav-item">
                            <Link to="/registration" className="nav-link">Patient Registration</Link>
                        </li>
                        <li className="nav-item">
                            <li><Link to="/diagnosis" className="nav-link">Diagnosis</Link></li>
                        </li>
                        <li className="nav-item">
                            <li><Link to="/payment" className="nav-link">Payment</Link></li>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {logOutButton}
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavigationBar;