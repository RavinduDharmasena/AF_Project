import React, { Component } from 'react';
import UserProfile from '../../../closure/UserProfile';

class UserInfo extends Component{

    //        {_id: "U1", username: "joe123", password: "joe123", name: "Joe Root", lastLogin: "2018-06-13T06:58:18.740Z", …}

    componentWillMount(){
        console.log("User Info Mounted");
        console.log(this.props);
        let part = UserProfile.getDate().split('T');
        console.log(part[0]);
    }

    render(){
        return(
          <div className="card">
              <div className="card-header bg-primary text-white">User Information</div>
              <div className="card-body"><h4>Picture Title</h4></div>
              <div className="card-footer">
                  <p>Username : {UserProfile.getUsername()}</p>
                  <p>Name : {UserProfile.getName()}</p>
                  <p>Last login : {UserProfile.getDate()}</p>
              </div>
          </div>
        );
    }
}

export default UserInfo;