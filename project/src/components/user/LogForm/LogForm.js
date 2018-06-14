import React,{ Component } from 'react'
import UserProfile from '../../../closure/UserProfile';
import Axios from 'axios';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            error:""
//            userData:{}
        }
        this.setError = this.setError.bind(this);
    }

    setError(value){
        this.setState({error:value});
    }

    setName(){
        if(this.state.username === ""){
            if(this.state.password === ""){
                this.props.setError("Username And Password Are Empty");
            }
            else{
                this.props.setError("Username Is Empty");
            }
        }
        else{
            if(this.state.password === ""){
                this.props.setError("Password Is Empty");
            }
        }

        if((this.state.username !== "") & (this.state.password !== "")){}
        Axios.get('http://localhost:8000/user/' + this.state.username + '/' + this.state.password).then(function (data) {
            console.log(data.data);
            return data.data;
        }).then(function (object) {
            let UserData = object;
            console.log(UserData);

            if(UserData.length > 0){
                this.props.setUserDetails(UserData);
                UserProfile.setUsername(this.state.username);
                UserProfile.setName(UserData[0].name);

     //           this.setState({userData:UserData});

     //           console.log(this.state.userData);

                /*const updatedUser = {
                    _id:UserData[0]._id,
                    username:UserData[0].username,
                    password:UserData[0].password,
                    name:UserData[0].name
                }

                Axios.put('http://localhost:8000/user/' + UserData[0]._id,updatedUser).then(function () {
                    console.log("Login date is updated");
                })*/

                /*
                *     "_id" : "U2",
    "username" : "suranga123",
    "password" : "suranga123",
    "name" : "Suranga Lakmal",
    "lastLogin" : ISODate("2018-06-13T06:58:18.740Z"),*/
                UserProfile.setDate(UserData[0].lastLogin);
                this.props.setLogged(true);
            }
            else{
                this.props.setError("Username and/or password is/are invalid");
            }
        }.bind(this));
    }

    setUsername(e){
        e.preventDefault();
        this.setState({username:e.target.value});
    }

    setPassword(e){
        e.preventDefault();
        this.setState({password:e.target.value});
    }

    render(){
        console.log(this.state.error);
        let ErrorBox;
        if(this.state.error !== ""){
            ErrorBox = (<div className="alert alert-danger alert-dismissible">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Error!</strong> {this.state.error}
            </div>);
        }
        return(
            <div>
                <div className="card">
                    <div className="card-header bg-default text-black">Login</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Username : </label>
                            <input type="text" placeholder="Username" className="form-control" onChange={this.setUsername.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input type="password" placeholder="password" className="form-control" onChange={this.setPassword.bind(this)}/>
                        </div>
                        <input type="button" className="btn btn-success" value="Log In" onClick={this.setName.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;