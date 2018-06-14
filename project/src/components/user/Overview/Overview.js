import React,{ Component } from 'react';
import Axios from "axios/index";

class Overview extends Component{
    constructor(props){
        super(props);
        this.state = {
            admittedAmount:0
        }
    }

    componentWillMount(){
        Axios.get('http://localhost:8000/registration/getAdmittedPatients').then(function (data) {
            console.log(data.data.length);
            this.setState({admittedAmount:this.state.admittedAmount + data.data.length});
        }.bind(this))
    }

    render(){
        return(
            <div className="card">
                <div className="card-header bg-default text-black">Overview</div>
                <div className="card-body">
                    <table>
                        <tbody>
                            <tr>
                                <td><p><b>Number of doctors available in hospital</b></p></td>
                                <td><p><b>:</b></p></td>
                                <td><p><b>10</b></p></td>
                            </tr>
                            <tr>
                                <td><p><b>Number of nurses available in hospital</b></p></td>
                                <td><p><b>:</b></p></td>
                                <td><p><b>10</b></p></td>
                            </tr>
                            <tr>
                                <td><p><b>Number of patient admitted today</b></p></td>
                                <td><p><b>:</b></p></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><p><b>Total number of admitted patients</b></p></td>
                                <td><p><b>:</b></p></td>
                                <td><p><b>{this.state.admittedAmount}</b></p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Overview