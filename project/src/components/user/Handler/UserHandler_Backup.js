import React,{ Component } from 'react';
import Overview from "../Overview/Overview";
import NavigationBar from "../../common/NavigationBar";
import LogForm from "../LogForm/LogForm";
import Footer from "../../common/Footer";
import "./UserHandler.css";
import UserInfo from "../UserInfo/UserInfo";
import UserProfile from "../../../closure/UserProfile";

class UserHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            logged:false
        }
        this.setLogged = this.setLogged.bind(this);
    }

    setLogged(value){
        this.setState({logged:value});
    }

    componentWillUpdate(){

    }

    render(){
        if(UserProfile.getName() === ""){
            return(
                <div>
                    <NavigationBar/>
                    <div className="inline-block col-sm-5">
                        <br/>
                        <LogForm/>
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
            return(
                <div>
                    <div>
                        <NavigationBar setLogged={this.setLogged}/>
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
    }
}

export default UserHandler;