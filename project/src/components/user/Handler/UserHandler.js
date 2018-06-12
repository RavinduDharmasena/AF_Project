import React,{ Component } from 'react';
import Overview from "../Overview/Overview";
import NavigationBar from "../../common/NavigationBar";
import LogForm from "../LogForm/LogForm";
import Footer from "../../common/Footer";
import "./UserHandler.css";
import UserInfo from "../UserInfo/UserInfo";
import UserProfile from "../../../closure/UserProfile";
import Payment from "../../payment/Payment";

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
                <div>
                    <NavigationBar/>
                    <Payment/>
                    <Footer/>
                </div>
            }
        }
    }
}

export default UserHandler;