import React,{ Component } from 'react'

class PatientDetails extends Component{

    /*constructor(props){
        super(props);

        this.state = {
            patientdata : this.props.patientdata
        }
    }
    */

    componentDidMount(){
        console.log("this is state from prop details"+this.props.patientdata);
    }

    render(){
        let pdetails = this.props.patientdata;
        return(

            <table className="table table-bordered table-hover">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{pdetails._id}</td>
                    </tr>
                    <tr>
                        <th>Full Name</th>
                        <td>{pdetails.fname+" "+pdetails.lname}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{pdetails.age}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{pdetails.gender}</td>
                    </tr>
                    <tr>
                        <th>NIC</th>
                        <td>{pdetails.nic}</td>
                    </tr>
                    <tr>
                        <th>Admitted Date</th>
                        <td>{pdetails.admitted_date}</td>
                    </tr>
                    <tr>
                        <th>Ward</th>
                        <td>{pdetails.ward}</td>
                    </tr>
                    <tr>
                        <th>Custodian Name</th>
                        <td>{pdetails.custodian_name}</td>
                    </tr>
                    <tr>
                        <th>Custodian Contact</th>
                        <td>{pdetails.custodian_contact}</td>
                    </tr>
                </tbody>
            </table>

        );
    }

}

export default PatientDetails;