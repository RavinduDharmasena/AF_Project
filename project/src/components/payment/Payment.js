import React,{ Component } from 'react'
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

class Payment extends Component{
    componentWillMount(){
        console.log(this.props);
//        this.props.setRun("payment");
    }

    render(){
        return(
            <div>
                <NavigationBar/>
                <h1>Payment Component</h1>
                <Footer/>
            </div>
        );
    }
}

export default Payment;