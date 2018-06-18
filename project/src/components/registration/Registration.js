import React,{ Component } from 'react';

class Registration extends Component{

    constructor(props) {

        super(props);
        this.state = {
            error: null,
            patients: [],
            test : 0,
            button : null
        };
    }

    setTest(e){
        this.props.setPatientId(e.target.id);
        this.props.setRun("FullRegistration");
    }

    componentDidMount() {
        console.log(this.props);
        fetch("http://localhost:8000/registration/getUnregisteredPatients")
            .then(res => res.json())
            .then(
                (result) => {
//                    console.log("XXXXXX");
//                    console.log(result);
//                    console.log("XXXXXX");
                    this.setState({
                        patients: result
                    });

                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    setRun(){
        this.props.setRun("QuickRegistration");
    }

    render(){

        const { patients } = this.state;

        return(
            <div>
                <div className= "card-header bg-info text-white">Full Registration</div>
                <div className="text-right mt-4">
                    <input type="button" className="btn btn-primary" value="Quick Registration" onClick={this.setRun.bind(this)}/>
                </div><br/>
                <div>

                    <table className="table table-dark table-hover">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                            {patients.map(patient => (
                                <tr key = {patient._id}>
                                    <td>{patient._id}</td><td> {patient.fname}</td><td>{patient.age}</td>
                                    <td><input id ={patient._id} className="btn btn-primary" value="Register" type="button" onClick={this.setTest.bind(this)}/></td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div><br/><br/>
            </div>
        );
    }
}

export default Registration;