import React,{ Component } from 'react';

class Registration extends Component{

    constructor(props) {

        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            patients: [],
            test : 0,
            button : null
        };
    }

    setTest(e){
        console.log(e.target.id);
        this.props.setPatientId(e.target.id);
        this.props.setRun("FullRegistration");
    }

    componentDidMount() {
        console.log(this.props);
        fetch("http://localhost:8000/getUnregisteredPatients")
            .then(res => res.json())
            .then(
                (result) => {
//                    console.log("XXXXXX");
//                    console.log(result);
//                    console.log("XXXXXX");
                    this.setState({
                        isLoaded: true,
                        patients: result
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    setRun(){
        this.props.setRun("QuickRegistration");
    }

    render(){

        const { error, isLoaded, patients } = this.state;

        return(
            <div>
                <h1>Unregistered Patients</h1>
                <div className="text-right mt-4">
                    <input type="button" className="btn btn-primary" value="Registering Patient" onClick={this.setRun.bind(this)}/>
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
                </div>
            </div>
        );
    }
}

export default Registration;