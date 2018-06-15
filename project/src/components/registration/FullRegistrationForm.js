import React, { Component } from 'react';
import Footer from "../common/Footer";

class FullRegistrationForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            patient : [],
            error : null
        }

        this.updatePatient = this.updatePatient.bind(this);
    }

    setRun(){
        this.props.setRun("Registration");
    }

    componentDidMount() {
        var id=this.props.patientId;

        fetch("http://localhost:8000/registration/getPatients/"+id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        patient: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render(){
        const {patient} = this.state;
        return(
            <div>
                <div className= "card-header bg-info text-white">Full Patient Registration</div>

                <div className="text-right mt-4">
                    <input className="btn btn-primary" type="button" value="Cancel" onClick={this.setRun.bind(this)} />
                </div><br/>

                <div className=" col-sm-5 ">

                        <label className="grey-text"> Id</label>
                        <input type="text" id="defaultFormRegisterIdEx" value={this.props.patientId} className="form-control w-25" readOnly /><br/>

                        <label className="grey-text">Patient first name</label>
                        <input type="text" id="defaultFormRegisterFirstNameEx" value={patient.fname} className="form-control w-100"/><br/>

                        <label className="grey-text">Patient Last name</label>
                        <input type="text" id="defaultFormRegisterLastNameEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Patient Age</label>
                        <input type="number" id="defaultFormRegisterAgeEx" value={patient.age} className="form-control w-100"/><br/>

                        <label className="grey-text">Gender</label>
                        <div className="form-goup">
                            <select className="form-control" id="defaultFormRegisterGenderEx">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <br/>

                        <label className="grey-text">Custodian Name</label>
                        <input type="text" id="defaultFormRegisterCustNameEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Custodian Contact</label>
                        <input type="number" id="defaultFormRegisterCustContactEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Patient NIC</label>
                        <input type="text" id="defaultFormRegisterNicEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Ward</label>
                        <input type="number" id="defaultFormRegisterWardEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Priority Level</label>
                        <div className="form-goup">
                            <select className="form-control" id="defaultFormRegisterPriorityEx">
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div><br/>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-success" onClick={this.updatePatient} >Register</button>

                        </div>
                </div><br/><br/><br/>
                <Footer/>

            </div>

        );
    }

    updatePatient() {
        var id = document.getElementById("defaultFormRegisterIdEx").value;
        var fnm = document.getElementById("defaultFormRegisterFirstNameEx").value;
        var age = document.getElementById("defaultFormRegisterAgeEx").value;
        var reg = "true";
        var stat = "admit";
        var lnm = document.getElementById("defaultFormRegisterLastNameEx").value;
        var gndr = document.getElementById("defaultFormRegisterGenderEx").value;
        var custName = document.getElementById("defaultFormRegisterCustNameEx").value;
        var custCont = document.getElementById("defaultFormRegisterCustContactEx").value;
        var nic = document.getElementById("defaultFormRegisterNicEx").value;
        var wrd = document.getElementById("defaultFormRegisterWardEx").value;
        var prLevel = document.getElementById("defaultFormRegisterPriorityEx").value;



        var obj= {
            fname : fnm,
            lname : lnm,
            age : age,
            gender : gndr,
            custodian_name : custName,
            custodian_contact : custCont,
            nic : nic,
            ward : wrd,
            registered : reg,
            status : stat,
            priority_level : prLevel


        };
        if(fnm==="" || age==="" || custName==="" || custCont==="" || nic==="" ||wrd===""){
            alert("Please fill the form...!");
        }else if(custCont.length>10 || custCont.length<9){
            alert("Invalid Number...!")
        }else if(nic.length!==10){
            alert("Invalid NIC...!")
        }
        else{
            fetch('http://localhost:8000/registration/fullRegistration/'+id, {
                method : 'PUT',
                headers : {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({obj})
            }).then(function () {
                alert("Patient Registration Successfully..!");
                this.setRun();
            }.bind(this));
        }

    }
}



export default FullRegistrationForm;