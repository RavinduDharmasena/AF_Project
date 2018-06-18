import React,{ Component } from 'react'
import Axios from 'axios';

import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";


class Diagosis extends Component{
    constructor(props){
        super(props);
        this.state = {
            nic:"",
            patientID:"",
            complaints:"",
            allergies:"",
            physicalExamination:"",
            injectionID:"",
            injectionAmount:0,
            sewingInput:"",
            sewing:false,
            drugID:"",
            drugAmount:0
        }
    }

    setNIC(e){
         this.setState({nic:e.target.value});
    }

    setpatientID(e){
        this.setState({patientID:e.target.value});
    }

    setcomplaints(e){
        this.setState({complaints:e.target.value});
    }

    setallergies(e){
        this.setState({allergies:e.target.value});
    }

    setphysicalExamination(e){
        this.setState({physicalExamination:e.target.value});
    }

    setinjectionID(e){
        this.setState({injectionID:e.target.value});
    }

    setdrugID(e){
        this.setState({drugID:e.target.value});
    }

    setdrugAmount(e){
        this.setState({drugAmount:e.target.value});
    }

    setinjectionAmount(e){
        this.setState({injectionAmount:e.target.value});
    }

    setSewing(e){
        this.setState({sewingInput:e.target.value});
    }

    getDetails(){
        console.log("NIC : " + this.state.nic);
        console.log("Patient ID : " + this.state.patientID);
        console.log("Complains : " + this.state.complaints);
        console.log("Allergies : " + this.state.allergies);
        console.log("Physical Examination : " + this.state.physicalExamination);

        if(this.state.sewingInput === "Yes"){
            this.setState({sewing:true});
        }
        else{
            this.setState({sewing:false});
        }


        console.log("Injection ID : " + this.state.injectionID);
        console.log("Injection Amount : " + this.state.injectionAmount);
        console.log("Drug ID : " + this.state.drugID);
        console.log("Drug Amount : " + this.state.drugAmount);
        console.log("Sewing : " + this.state.sewing);

        const Injection = {
            injectid:this.state.injectionID,
            amt:this.state.injectionAmount
        }

        const Drug = {
            drugid:this.state.drugID,
            qty:this.state.drugAmount
        }
        const Diagnosis = {
            _id:Date.now(),
            patientid:this.state.patientID,
            complaints:this.state.complaints,
            allergies:this.state.allergies,
            phyexams:this.state.physicalExamination,
            treatments:{
                injection:[{injectid:this.state.injectionID,
                            amt:this.state.injectionAmount
                }],
                sewing:this.state.sewing
            },
            presdrugs:[{drugid:this.state.drugID,
                        qty:this.state.drugAmount
            }],
        }

        console.log(Diagnosis);
        Axios.post('http://localhost:9001/adddiag',Diagnosis).then(function(){
            console.log("successfully inserted");
            alert("Diagnosis Added Successfully!");
        })
    }

    render(){
        return(
            <div>
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Diagnosis Form</div>
                        <div className="card-body">
                            <div>
                                <div className="cont">
                                    <p className="text">
                                        <label htmlFor="usr">Patient ID: </label>
                                    </p>
                                    <input type="text" className="form-control" id="usr" onChange={this.setpatientID.bind(this)}/>
                                </div>
                                <br/>
                                <div>
                                    <label className="text">Complaints</label>
                                    <textarea className="form-control" rows="5" id="comment" onChange={this.setcomplaints.bind(this)}/>
                                </div>
                                <br/>
                                <div>
                                    <label className="text">Allergies</label>
                                    <textarea className="form-control" rows="5" id="comment" onChange={this.setallergies.bind(this)}/>
                                </div>
                                <br/>
                                <div>
                                    <label className="text">Physical Examination</label>
                                    <textarea className="form-control" rows="5" id="comment" onChange={this.setphysicalExamination.bind(this)}/>
                                </div>
                                <br/>
                                <div>
                                    <p className="text">Treatement: </p>
                                    <p className="text">Injections: </p>
                                    <input type="text" placeholder="Injection ID" className="form-control" onChange={this.setinjectionID.bind(this)}/>
                                    <br/>
                                    <input type="text" placeholder="Injection Quantity" className="form-control" onChange={this.setinjectionAmount.bind(this)}/>
                                    <p className="text">Sewings: </p>
                                    <input type="text" placeholder="Yes Or No" className="form-control" onChange={this.setSewing.bind(this)}/>
                                </div>
                                <br/>
                                <div>
                                    <p className="text">Prescription: </p>
                                    <p className="text">Drugs: </p>
                                    <input type="text" placeholder="Drug ID" className="form-control" onChange={this.setdrugID.bind(this)}/>
                                    <br/>
                                    <input type="text" placeholder="Drug Quantity" className="form-control" onChange={this.setdrugAmount.bind(this)}/>
                                </div>
                                <br/>
                            </div>
                            <br/>
                            <input type="button" className="btn btn-primary btn-sm" onClick={this.getDetails.bind(this)} value="Add Diagnosis"/>
                        </div>
                    </div>
                </div>
                <br/>
                <br/><br/><br/>
            </div>
        );
    }
}

export default Diagosis;

