import React,{ Component } from 'react'
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

class User extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <h1>User Component</h1>
                <Footer/>
            </div>
        );
    }
}

export default User;