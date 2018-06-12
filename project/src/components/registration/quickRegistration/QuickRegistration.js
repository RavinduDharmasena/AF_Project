import React,{ Component} from 'react'
import NavigationBar from "../../common/NavigationBar";
import Footer from "../../common/Footer";
import { Link } from 'react-router';

class QuickRegistration extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <h1>Quick Patient Registration</h1>
                <div>
                    <form>

                        <label for="defaultFormRegisterNameEx" class="grey-text">Patient name</label>
                        <input type="text" id="defaultFormRegisterNameEx" class="form-control"/><br/>

                        <label for="defaultFormRegisterEmailEx" class="grey-text">Patient Age</label>
                        <input type="email" id="defaultFormRegisterEmailEx" class="form-control"/><br/>

                        <div class="text-center mt-4">
                            <button class="btn btn-unique" type="button" ><Link to="/fullRegistration">Register</Link></button>

                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default QuickRegistration;