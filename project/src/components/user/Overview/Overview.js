import React,{ Component } from 'react';
import Axios from "axios/index";

class Overview extends Component{
    constructor(props){
        super(props);
        this.state = {
            admittedAmount:0,
            admittedAmountToday:0
        }
    }

    componentWillMount(){
        Axios.get('http://localhost:8000/registration/getAdmittedPatients').then(function (data) {
            console.log(data.data.length);
            this.setState({admittedAmount:this.state.admittedAmount + data.data.length});
        }.bind(this))

        Axios.get('http://localhost:8000/registration/getAdmittedPatients').then(function (data) {
            var admittedPatientsToday = [];
            var date = new Date().toISOString().split("T");//"2018-06-12";
            var amount = 0;
            console.log("Date : " + date[0]);
            console.log(data.data);

            data.data.map(function (item) {
                var AdmittedDate = item.admitted_date.split("T");
                if(AdmittedDate[0] === date[0]){
                    console.log(AdmittedDate);
                    amount++;
                }
            });
            this.setState({admittedAmountToday:amount});
        }.bind(this))
    }

    render(){
        let UpdatedateTime = new Date().toISOString().split("T");
        return(
            <div className="card">
                <div className="card-header bg-info text-white">Overview</div>
                <div className="card-body">
                    <div>
                        <div className="inline-block col-sm-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white"><p align="center">Number of doctors</p></div>
                                <div className="card-body"><h2 align="center">6</h2></div>
                            </div>
                        </div>
                        <div className="inline-block  col-sm-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white"><p align="center">Number of nurses</p></div>
                                <div className="card-body"><h2 align="center">10</h2></div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div className="inline-block  col-sm-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white"><p align="center">Number of patient admitted today</p></div>
                                <div className="card-body"><h2 align="center">{this.state.admittedAmountToday}</h2></div>
                            </div>
                        </div>
                        <div className="inline-block  col-sm-6">
                            <div className="card">
                                <div className="card-header bg-secondary text-white"><p align="center">Total number of admitted patients</p></div>
                                <div className="card-body"><h2 align="center">{this.state.admittedAmount}</h2></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {"Updated on " + UpdatedateTime[0] + " " + UpdatedateTime[1].split(".")[0] + " GMT"}
                </div>
            </div>
        );
    }
}

export default Overview