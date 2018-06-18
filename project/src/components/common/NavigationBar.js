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
        this.props.setError("");
        UserProfile.setName("");
        console.log("Log out called");
        this.props.setLogged(false);
        UserProfile.setRun("user");
    }

    setRun(value){
        if(this.state.logged){
            this.props.setError("");
        }
        if(UserProfile.getRun() !== ""){
            console.log("run nav : " + UserProfile.getRun());
            this.props.setRun(value);
        }
        else{
            console.log("run nav : " + UserProfile.getRun());
            this.props.setRun("user");
        }
    }

    setPayment(){
        this.setRun("payment");
    }

    setUser(){
        this.setRun("user");
    }

    setDiagnosis(){
        this.setRun("diagnosis");
    }

    setRegister(){
        this.setRun("register");
        if(this.props.run === "register"){
            this.props.setRunLocal("QuickRegistration");
        }
    }

    render(){
        var logOutButton;
        if(UserProfile.getName() !== ""){
            logOutButton = <input type="button" className="btn btn-danger" value="Log Out" onClick={this.unsetName.bind(this)}/>
        }

        return(
            <div>
                <div>
                    <img src={require('../../img/header.png')} className="card-img-top imgDisplay"/>

                </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">PCU</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link onClick={this.setUser.bind(this)} className="nav-link">Overview</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={this.setRegister.bind(this)} className="nav-link">Patient Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={this.setDiagnosis.bind(this)} className="nav-link">Diagnosis</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={this.setPayment.bind(this)} className="nav-link">Discharge</Link>
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