import React,{ Component } from 'react'
import Footer from "../common/Footer";
import Axios from 'axios'
import PatientDetails from "./PatientDetails";
import PatientBill from "./PatientBill";

class Payment extends Component{

    constructor(props){
        super(props);
        this.state = {
            search_p_id : 0,
            patientdata : null,
            billdata: null,
            searchbox : null
        }
    }


    setSearchPID(e){
            this.setState({search_p_id: e.target.value});
            this.setState({searchbox: e.target});
            console.log("****this is inside setsearchpid"+this.state.search_p_id)
    }

    search(e){
            console.log("***********************************"+this.state.search_p_id);
            Axios.get("http://localhost:8000/registration/getpatient/"+this.state.search_p_id).then(function (data) {
                console.log(data.data);
                if(data.data===null){
                    this.setState({patientdata : null});
                    alert("Patient Already Discharged or Not Found");
                    this.state.searchbox.value="";
                }else{
                    this.setState({patientdata : data.data});
                }

            }.bind(this)).then(Axios.get("http://localhost:9001/calcbill/"+this.state.search_p_id).then(function (data) {
                console.log(data.data);
                this.setState({billdata : data.data});
            }.bind(this)));
    }


    render(){

        let pdetails;
        let pbill;
        let alertmsg;
        if(this.state.patientdata !== null){
            console.log(this.state.patientdata);
            console.log(this.state.billdata);
            pdetails = (
                <PatientDetails patientdata={this.state.patientdata}/>
            );
            pbill = (
                <PatientBill patientbill={this.state.billdata}/>
            );
        }
        else{
            pdetails=(
                <p>no patient selected</p>
            );
            pbill=(
                <p>no patient selected</p>
            );
        }


        return(
            <div>
                <div className="card">
                    <div className="card-header bg-info text-white">Discharge Patient</div>
                    <div className="card-body">
                        <div>
                            <div>
                                <label>Find Patient</label>
                                <div>
                                    <div className="w-50 inline-block" >
                                        <input id="patientsearch" onChange={this.setSearchPID.bind(this)} type="text" placeholder="Enter Paitent ID Here" className=" form-control"/>
                                    </div>
                                    <div className="inline-block col-sm-3" >
                                        <input id="patientsearchbtn" type="button" onClick={this.search.bind(this)} value="Search" className="btn btn-success"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="inline-block col-sm-6">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-info text-white">Patient Details</div>
                        <div className="card-body">
                            {pdetails}
                        </div>
                    </div>
                </div>
                <div className="inline-block col-sm-6">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-info text-white">Patient Bill</div>
                        <div className="card-body">
                            {pbill}
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