import React,{ Component } from 'react';
import Overview from "../../user/Overview/Overview";
import NavigationBar from "../NavigationBar";
import LogForm from "../../user/LogForm/LogForm";
import Footer from "../Footer";
import UserInfo from "../../../components/user/UserInfo/UserInfo";
import UserProfile from "../../../closure/UserProfile";
import Payment from "../../payment/Payment";
import Diagosis from "../../diagnosis/Diagosis";
import Registration from "../../registration/Registration";

import "./UserHandler.css";
import RegistrationController from "../../registration/RegistrationController";

class UserHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            logged:false,
            run:"user",
            error:"",
            userDetails:{}
        }
        this.setLogged = this.setLogged.bind(this);
        this.setRun = this.setRun.bind(this);
        this.setError = this.setError.bind(this);
        this.setUserDetails = this.setUserDetails.bind(this);
    }

    setUserDetails(object){
        this.setState({userDetails:object});
    }

    setError(value){
        this.setState({error:value});
    }

    setLogged(value){
        this.setState({logged:value});
    }

    setRun(value){
        this.setState({run:value});
        UserProfile.setRun(value);
        console.log(this.state.run);
    }

    componentWillMount(){
        if(UserProfile.getRun() !== "undefined"){
            this.setRun(UserProfile.getRun());
        }
//        this.console.log(UserProfile.getRun());
//        this.setRun(this.state.run);
        if(UserProfile.getName() === ""){
            this.setLogged(false);
        }
        else{
            this.setLogged(true);
        }
    }

    render(){
        /*let ErrorBox = "";
        if(this.state.error !== ""){
            console.log("Inside first if");
            ErrorBox = (<div className="alert alert-danger">
                {this.state.error}
            </div>);
        }
        else{
            console.log("Inside second if");
            ErrorBox = "";
        }*/
        if(!this.state.logged){
            /*let ErrorBox;
            if(this.state.error !== ""){
                console.log("inside first if");
                ErrorBox = (<div className="alert alert-danger">
                    {this.state.error}
                </div>);
            }
            else{
                console.log("inside second if");
                ErrorBox = "";
            }*/
            return(
                <div>
                    <NavigationBar setRun={this.setRun} logged={this.state.logged}/>
                    <div className="inline-block col-sm-5">
                        <br/>
                        <LogForm setLogged={this.setLogged} setError={this.setError} setUserDetails={this.setUserDetails} error={this.state.error}/>
                    </div>
                    <div className="inline-block col-sm-7">
                        <br/>
                        <Overview/>
                    </div>
                    <Footer/>
                </div>
            )
        }
        else{
            if(this.state.run === "user"){
                return(
                    <div>
                        <div>
                            <NavigationBar setLogged={this.setLogged} setRun={this.setRun} setError={this.setError}/>
                            <div className="inline-block col-sm-5">
                                <br/>
                                <UserInfo userDetails={this.state.userDetails}/>
                            </div>
                            <div className="inline-block col-sm-7">
                                <br/>
                                <Overview/>
                            </div>
                            <Footer/>
                        </div>
                    </div>
                );
            }
            else if(this.state.run === "payment"){
                return(
                    <div>
                        <NavigationBar setLogged={this.setLogged} setRun={this.setRun} setError={this.setError}/>
                        <Payment/>
                        <Footer/>
                    </div>
                );
            }
            else if(this.state.run === "diagnosis"){
                return(
                    <div>
                        <NavigationBar setLogged={this.setLogged} setRun={this.setRun} setError={this.setError}/>
                        <Diagosis/>
                        <Footer/>
                    </div>
                );
            }
            else if(this.state.run === "register"){
                return(
                    <div>
                        <RegistrationController setLogged={this.setLogged} setRun={this.setRun} setError={this.setError} run={this.state.run}/>
                        <Footer/>
                    </div>
                );
            }
        }
    }
}

export default UserHandler;