import React, { Component } from 'react';
import Axios from "axios/index";
import Overview from "../Overview/Overview";
import UserInfo from "../UserInfo/UserInfo";

class Test extends Component{
    componentWillMount(){
        Axios.get('http://localhost:8000/registration/getAdmittedPatients').then(function (data) {
            var admittedPatientsToday = [];
            var date = "2018-06-12";
            console.log("Date : " + date);
            console.log(data.data);

            data.data.map(function (item) {
                var AdmittedDate = item.admitted_date.split("T");
                if(AdmittedDate[0] === date){
                    console.log(AdmittedDate);
                }
            })

            return data.data;
        })
    }

    render(){
        return(
          <UserInfo/>
        );
    }
}

export default Test;