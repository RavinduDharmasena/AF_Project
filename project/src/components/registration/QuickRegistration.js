import React, {Component} from 'react'
class QuickRegistration extends Component{


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            idAuto: []
        };
    }

    componentWillMount(){
        console.log(this.props);
    }

    setRun(){
        this.props.setRun("Registration");
    }

    setQuick(){
        this.props.setRun("QuickRegistration");
    }

    componentDidMount() {
        console.log(this.props);
        fetch("http://localhost:8000/registration/getMaxId")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result._id);
                    this.setState({
                        isLoaded: true,
                        idAuto: result._id+1,
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

    render(){
        const { idAuto } = this.state;
            return(
                <div>
                    <div className= "card-header bg-info text-white">Quick Patient Registration</div>

                    <div>
                        <div className="text-right mt-4">
                            <input className="btn btn-primary" type="button" value="View Unregistered Patients" onClick={this.setRun.bind(this)}/>
                        </div><br/>
                        <div className=" col-sm-5 ">
                                <label className="grey-text"> Id</label>
                                <input type="text" id="defaultFormRegisterIdEx" placeholder={idAuto} value={idAuto} className="form-control w-25" readOnly /><br/>

                                <label className="grey-text">Patient name</label>
                                <input type="text" id="defaultFormRegisterNameEx" className="form-control w-100"/><br/>

                                <label className="grey-text">Patient Age</label>
                                <input type="number" id="defaultFormRegisterAgeEx" className="form-control w-100"/><br/>

                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-success" onClick={this.addPatient} >Register</button>
                                </div>
                        </div>
                    </div>
                </div>
            );
    }

    addPatient() {
        var id = document.getElementById("defaultFormRegisterIdEx").value;
        var name = document.getElementById("defaultFormRegisterNameEx").value;
        var age = document.getElementById("defaultFormRegisterAgeEx").value;
        var reg = "false";
        var stat = "";

        if(name===""){
            alert("Fill the name")
        }else if(age===""){
            alert("Fill the age")
        }else {
            var obj = {
                _id: id,
                fname: name,
                age: age,
                registered: reg,
                status : stat
            };

            fetch('http://localhost:8000/registration/addPatient', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({obj})
            }).then(function () {
                alert("Patient Added for the Registration!");
            })
        }
    }
}


export default QuickRegistration;