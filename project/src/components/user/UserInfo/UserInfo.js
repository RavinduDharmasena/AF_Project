import React, { Component } from 'react';

class UserInfo extends Component{
    render(){
        return(
          <div className="card">
              <div className="card-header bg-primary text-white">Some Component Title</div>
              <div className="card-body">Some information</div>
          </div>
        );
    }
}

export default UserInfo;