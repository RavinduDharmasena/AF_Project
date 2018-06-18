import React, {Component} from 'react';
import Footer from "../common/Footer"
import FullRegistrationForm from "./FullRegistrationForm";
import Registration from './Registration';
import QuickRegistration from "./QuickRegistration";
import NavigationBar from "../common/NavigationBar";

class RegistrationController extends Component{

    constructor(props){
        super(props);
        this.state = {
            patientId : null,
            run : "QuickRegistration"
        }
        this.setPatientId = this.setPatientId.bind(this);
        this.setRun = this.setRun.bind(this);
    }

    setPatientId(value){
        this.setState({patientId : value});
    }

    setRun(value){
        this.setState({run : value});
    }

    render(){
        if(this.state.run === "Registration") {
            return (
                <div>
                    <NavigationBar setLogged={this.props.setLogged} setRun={this.props.setRun} setError={this.props.setError} setRunLocal={this.setRun} run={this.props.run}/>
                    <Registration setRun={this.setRun} setPatientId={this.setPatientId}/>
                    <Footer/>
                </div>
            );
        }
        else if(this.state.run === "FullRegistration"){
            return (
                <div>
                    <NavigationBar setLogged={this.props.setLogged} setRun={this.setRun} setError={this.props.setError} setRunLocal={this.setRun} run={this.props.run}/>
                    <FullRegistrationForm patientId={this.state.patientId} setRun={this.setRun}/>
                    <Footer/>
                </div>
            );
        }
        else if(this.state.run === "QuickRegistration"){
            return(
                <div>
                    <NavigationBar setLogged={this.props.setLogged} setRun={this.props.setRun} setError={this.props.setError} setRunLocal={this.setRun} run={this.props.run}/>
                    <QuickRegistration setRun={this.setRun}/>
                </div>
            );
        }
    }
}

export default RegistrationController;