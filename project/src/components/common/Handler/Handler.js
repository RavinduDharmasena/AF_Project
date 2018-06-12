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

class UserHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            logged:false,
            run:"user"
        }
        this.setLogged = this.setLogged.bind(this);
        this.setRun = this.setRun.bind(this);
    }

    setLogged(value){
        this.setState({logged:value});
    }

    setRun(value){
        this.setState({run:value});
        console.log(this.state.run);
    }

    componentWillMount(){
        if(UserProfile.getName() === ""){
            this.setLogged(false);
        }
        else{
            this.setLogged(true);
        }
    }

    render(){
        if(!this.state.logged){//(UserProfile.getName() === ""){
            return(
                <div>
                    <NavigationBar setRun={this.setRun}/>
                    <div className="inline-block col-sm-5">
                        <br/>
                        <LogForm setLogged={this.setLogged}/>
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
                            <NavigationBar setLogged={this.setLogged} setRun={this.setRun}/>
                            <div className="inline-block col-sm-5">
                                <br/>
                                <UserInfo/>
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
                        <NavigationBar setLogged={this.setLogged} setRun={this.setRun}/>
                        <Payment/>
                        <Footer/>
                    </div>
                );
            }
            else if(this.state.run === "diagnosis"){
                return(
                    <div>
                        <NavigationBar setLogged={this.setLogged} setRun={this.setRun}/>
                        <Diagosis/>
                        <Footer/>
                    </div>
                );
            }
            else if(this.state.run === "register"){
                return(
                    <div>
                        <NavigationBar setLogged={this.setLogged} setRun={this.setRun}/>
                        <Registration/>
                        <Footer/>
                    </div>
                );
            }
        }
    }
}

export default UserHandler;