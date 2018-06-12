import React, { Component } from 'react';
import UserProfile from '../../../closure/UserProfile';

class UserInfo extends Component{
    render(){
        return(
          <div className="card">
              <div className="card-header bg-primary text-white">User Information</div>
              <div className="card-body"><h4>Hellow {UserProfile.getName()}</h4></div>
          </div>
        );
    }
}

export default UserInfo;