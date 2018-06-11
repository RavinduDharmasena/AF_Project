import React,{ Component } from 'react';
import Overview from "../Overview/Overview";
import NavigationBar from "../../common/NavigationBar";
import LogForm from "../LogForm/LogForm";
import Footer from "../../common/Footer";
import "./UserHandler.css";
import UserInfo from "../UserInfo/UserInfo";

class UserHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            logged:true
        }
        this.setLogged = this.setLogged.bind(this);
    }

    setLogged(){
        this.setState({logged:!this.state.logged});
    }

    render(){
        if(!this.state.logged){
            return(
                <div>
                    <NavigationBar logged={this.state.logged}/>
                    <div className="inline-block col-sm-5">
                        <br/>
                        <LogForm setLogged={this.setLogged.bind(this)}/>
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
                        <NavigationBar logged={this.state.logged} setLogged={this.setLogged}/>
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