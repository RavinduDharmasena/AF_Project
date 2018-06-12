import React,{ Component } from 'react'
import Footer from "../common/Footer";
import Axios from 'axios'

class Payment extends Component{
    search(){
        Axios.get("http://localhost:9001/getdiag").then(function (data) {
            console.log(data.data);
        })
    }

    render(){
        return(
            <div>

                <div className="card">
                    <div className="card-header bg-info text-white">Discharge Patient</div>
                    <div className="card-body">
                        <div>
                            <div>
                                <label>Find Patient</label>
                                <div>
                                    <input id="patientsearch" type="text" placeholder="Enter Paitent ID Here" className="w-50 form-control"/><br/>
                                    <input type="button" onClick={this.search.bind(this)} value="Search" className="btn btn-success"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="inline-block col-sm-5">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-info text-white">Patient Details</div>
                        <div className="card-body">
                            <div >
                                <label>No data available</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="inline-block col-sm-5">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-info text-white">Patient Bill</div>
                        <div className="card-body">
                            <div>
                                <label>No data available</label>
                            </div>

                        </div>
                    </div>
                </div>


                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default Payment;