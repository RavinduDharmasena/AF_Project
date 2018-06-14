import React, { Component } from 'react';
import { Link } from 'react-router'
import Footer from "../common/Footer";

class FullRegistrationForm extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Full Patient Registration</h1>

                <div className="text-right mt-4">
                    <input className="btn btn-primary" type="button" value="Cancel" />
                </div><br/>

                <div className=" col-sm-5 ">

                        <label className="grey-text"> Id</label>
                        <input type="text" id="defaultFormRegisterIdEx" value={this.props.patientId} className="form-control w-25" readOnly /><br/>

                        <label className="grey-text">Patient first name</label>
                        <input type="text" id="defaultFormRegisterFirstNameEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Patient Last name</label>
                        <input type="text" id="defaultFormRegisterLastNameEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Patient Age</label>
                        <input type="text" id="defaultFormRegisterAgeEx" className="form-control w-100"/><br/>

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
                        <input type="text" id="defaultFormRegisterCustContactEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Patient NIC</label>
                        <input type="text" id="defaultFormRegisterNicEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Ward</label>
                        <input type="text" id="defaultFormRegisterWardEx" className="form-control w-100"/><br/>

                        <label className="grey-text">Priority Level</label>
                        <div className="form-goup">
                            <select className="form-control" id="defaultFormRegisterPriorityEx">
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div><br/>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-success" onClick={addPatient}>Register</button>

                        </div>
                </div><br/><br/><br/>
                <Footer/>

            </div>

        );
    }


}

function addPatient() {
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
        _id : id,
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
    console.log(obj);

    fetch('http://localhost:8000/addPatient/:{id}', {
        method : 'POST',
        headers : {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({obj})
    }).then(function () {
        alert("Patient Added for the Registration!");

    })
}

export default FullRegistrationForm;