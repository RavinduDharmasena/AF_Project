import React,{ Component } from 'react'
import { Link } from 'react-router';
import UserProfile from '../../closure/UserProfile';

class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            logged:false
        }
    }

    componentWillMount(){
        if(UserProfile.getName() !== ""){
            this.setState({loggged:true});
        }
        else{
            this.setState({logged:false});
        }
        console.log(UserProfile.getName());
    }

    unsetName(){
        UserProfile.setName("");
        console.log("Log out called");
        this.props.setLogged(false);
    }

    setRun(){
        this.props.setRun("payment");
    }

    render(){
        var logOutButton
        if(UserProfile.getName() !== ""){
            logOutButton = <input type="button" className="btn btn-danger" value="Log Out" onClick={this.unsetName.bind(this)}/>
        }

        return(
            <div>
                <div>
                    <p>Header</p>
                </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">Logo</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Overview</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registration" className="nav-link">Patient Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/diagnosis" className="nav-link">Diagnosis</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/payment" className="nav-link">Payment</Link>
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