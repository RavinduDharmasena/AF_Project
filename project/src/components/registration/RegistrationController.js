import React, {Component} from 'react';
import Footer from "../common/Footer"
import FullRegistrationForm from "./FullRegistrationForm";
import Registration from './Registration';
import QuickRegistration from "./QuickRegistration";

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
                    <Registration setRun={this.setRun} setPatientId={this.setPatientId}/>
                    <Footer/>
                </div>
            );
        }
        else if(this.state.run === "FullRegistration"){
            return (
                <div>
                    <FullRegistrationForm patientId={this.state.patientId} setRun={this.setRun}/>
                    <Footer/>
                </div>
            );
        }
        else if(this.state.run === "QuickRegistration"){
            return(
              <QuickRegistration setRun={this.setRun}/>
            );
        }
    }
}

export default RegistrationController;