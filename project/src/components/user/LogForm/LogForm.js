import React,{ Component } from 'react'

class User extends Component{
    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-header bg-default text-black">Login Form</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Username : </label>
                            <input type="text" placeholder="Username" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input type="password" placeholder="password" className="form-control"/>
                        </div>
                        <input type="button" className="btn btn-success" value="Log In" onClick={this.props.setLogged}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;