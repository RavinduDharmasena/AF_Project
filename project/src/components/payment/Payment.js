import React,{ Component } from 'react'
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

class Payment extends Component{
    render(){
        return(
            <div>
                <h1>Payment Component</h1>
                <Footer/>
            </div>
        );
    }
}

export default Payment;