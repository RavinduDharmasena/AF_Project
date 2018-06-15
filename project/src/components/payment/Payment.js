import React,{ Component } from 'react'
import Footer from "../common/Footer";
import Axios from 'axios'
import PatientDetails from "./PatientDetails";
import PatientBill from "./PatientBill";
import AddPayment from "./AddPayment";

class Payment extends Component{

    constructor(props){
        super(props);
        this.state = {
            search_p_id : null,
            patientdata : null,
            billdata: null,
            searchbox : null,
            showpayment:false
        }
    }

    setBillData(){
        this.setState({billdata:null});
    }

    setPatientData(){
        this.setState({patientdata:null});
    }

    setShowPayment(){
        this.setState({showpayment:!this.state.showpayment});
    }

    setSearchPID(e){
            this.setState({search_p_id: e.target.value});
            this.setState({searchbox: e.target});
            console.log("****this is inside setsearchpid"+this.state.search_p_id)
    }


    search(e){
            console.log("***********************************"+this.state.search_p_id);
            this.state.showpayment=false;
            if(this.state.search_p_id!==null || this.state.search_p_id=="") {
                Axios.get("http://localhost:8000/registration/getpatient/" + this.state.search_p_id).then(function (data) {
                    console.log(data.data);
                    if (data.data === null || data.data === "") {
                        this.setState({patientdata: null});
                        alert("Patient Already Discharged or Not Found");
                        this.state.searchbox.value = "";
                        this.state.search_p_id=null;
                    } else {
                        this.setState({patientdata: data.data});
                    }

                }.bind(this)).then(Axios.get("http://localhost:9001/calcbill/" + this.state.search_p_id).then(function (data) {
                    console.log(data.data);
                    this.setState({billdata: data.data});
                }.bind(this)));
            }
            else{
                alert("Invalid Patient ID!");
            }
    }


    render(){
        let viewpayment;
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
                <PatientBill patientbill={this.state.billdata} setShowPayment={this.setShowPayment.bind(this)}/>
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

        if(this.state.showpayment){
            viewpayment = (
                <AddPayment bill={this.state.billdata} patientdata={this.state.patientdata} searchboxref={this.state.searchbox} setshowpayment={this.setShowPayment.bind(this)} setbilldata={this.setBillData.bind(this)} setpatientdata={this.setPatientData.bind(this)}/>
            );
        }
        else{
            viewpayment = "";
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
                                        <input id="patientsearch" onChange={this.setSearchPID.bind(this)} type="text" placeholder="Enter Patient ID Here" className=" form-control"/>
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
                        <div className="card-header bg-info text-white">Patient Bill</div>
                        <div className="card-body">
                            {pbill}
                        </div>
                    </div>
                </div>
                <div className="inline-block col-sm-6">
                    <br/>
                    <div className="card">
                        <div className="card-header bg-info text-white">Patient Details</div>
                        <div className="card-body">
                            {pdetails}
                        </div>
                    </div>
                </div>
                {viewpayment}
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default Payment;