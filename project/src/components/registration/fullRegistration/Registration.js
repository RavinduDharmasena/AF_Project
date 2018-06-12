import React,{ Component } from 'react'
import NavigationBar from "../../common/NavigationBar";
import Footer from "../../common/Footer";

class Registration extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <h1>Full Registration Component</h1>
                <Footer/>
            </div>
        );
    }
}

export default Registration;