import React, { Component } from 'react';
import UserProfile from '../../../closure/UserProfile';
import './UserInfo.css';

class UserInfo extends Component{

    componentWillMount(){
        console.log("User Info Mounted");
        console.log(this.props);
        console.log("Username : " + UserProfile.getUsername());
        let date = UserProfile.getDate().substring(0,10);
        let time = UserProfile.getDate().substring(11,19);
        console.log("Date : " + date);
        console.log("Time : " + time);
    }

    render(){
        return(
          <div className="card">
              <div className="card-header bg-primary text-white">User Information</div>
              <img src={require('../../../img/user-50x50.png')} className="card-img-top imgDisplay"/>
              <div className="card-footer">
                  <p>Username : {UserProfile.getUsername()}</p>
                  <p>Name : {UserProfile.getName()}</p>
                  <p>Last login : {UserProfile.getDate().substring(0,10) + " " + UserProfile.getDate().substring(11,19) + " GMT"}
                  </p>
              </div>
          </div>
        );
    }
}

export default UserInfo;