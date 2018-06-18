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
                console.log("Username : " + this.state.username);
                UserProfile.setUsername(UserData[0].username);
                UserProfile.setName(UserData[0].name);
            }
            else{
                if((this.state.username !== "") & (this.state.password !== "")){
                    this.props.setError("Username and/or password is/are invalid");
                }
                return;
            }
            return UserData;
        }.bind(this)).then(function (object) {
            let UserObject = object;
            //console.log(UserObject);
            //console.log("object ID : " + UserObject[0]._id);
            Axios.get('http://localhost:8000/user/' + UserObject[0]._id).then(function (data) {
                console.log(data.data);
                UserProfile.setDate(data.data[0].lastLogin);
                return UserObject;
            }).then(function (object) {
                console.log(object);
                const updatedUser = {
                    _id:object[0]._id
                }
                console.log('http://localhost:8000/user/' + object[0]._id);
                Axios.put('http://localhost:8000/user/' + object[0]._id,updatedUser).then(function () {
                    console.log("Login date is updated");
                });
                this.props.setLogged(true);
            }.bind(this));
        }.bind(this)).catch(function (reason) {
            console.log("Error : " + reason);
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
        let ErrorBox = "";
        console.log(this.state.error);
        if(this.props.error !== ""){
            ErrorBox = (
                <div className="alert alert-danger">
                    {this.props.error}
                </div>
            );
        }
        else{
            ErrorBox = "";
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
                        <br/><br/>
                        {ErrorBox}
                    </div>
                </div>
            </div>
        );
    }
}

export default User;