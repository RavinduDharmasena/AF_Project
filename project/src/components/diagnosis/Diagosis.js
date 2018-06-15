import React,{ Component } from 'react'
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";


class Diagosis extends Component{
    render(){
        return(
            <div>
            <div className="card">
            <div className="card-header bg-info text-white">Admit Patient</div>
        <div className="card-body">
            <div>
            <div>
            <div>
            <label>NIC:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="w-50 inline-block" >
            <input id="patientnic" onChange={this.setSearchPID.bind(this)} type="text" placeholder="Enter Paitent NIC Here" className=" form-control"/>
            </div>
            </div>
            <label>Patient Id:</label>&nbsp;
        <div className="w-50 inline-block" >
            <input id="patientid" onChange={this.setSearchPID.bind(this)} type="text" placeholder="Enter Paitent ID Here" className=" form-control"/>
            </div>
            </div>
            </div>
            </div>
            </div>

            <br/>

            <div className="inline-block col-sm-6">
            <br/>
            <div className="card">
            <div className="card-header bg-info text-white">Complaints:</div>
        <div className="card-body">
            <div className="w-50 inline-block" >
            <textarea id="complaints" onChange={this.setSearchPID.bind(this)} type="text" className=" form-control"></textarea>
            </div>
            </div>
            </div>
            </div>
            <div className="inline-block col-sm-6">
            <br/>
            <div className="card">
            <div className="card-header bg-info text-white">Allergies</div>
            <div className="card-body">
            <div className="w-50 inline-block" >
            <textarea id="allergies" onChange={this.setSearchPID.bind(this)} type="text"  className=" form-control"></textarea>
            </div>
            </div>
            </div>
            </div>
            <div className="inline-block col-sm-6">
            <br/>
            <div className="card">
            <div className="card-header bg-info text-white">Physical Examination</div>
        <div className="card-body">
            <div className="w-50 inline-block" >
            <textarea id="physical" onChange={this.setSearchPID.bind(this)} type="text"  className=" form-control"></textarea>
            </div>
            </div>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="card">
            <div className="card-header bg-info text-white">Treatement:</div>
        <div className="card-body">
            <div>
            <div className="inline-block col-sm-4" >
            <input type="checkbox"/> Injection &nbsp;&nbsp;
    <input id="injectadd" type="button" onClick={this.search.bind(this)} value="Add" className="btn btn-success"/>
            </div>
            <div className="inline-block col-sm-4" >
            <input type="checkbox"/> Sewing &nbsp;&nbsp;
    <input id="injectadd" type="button" onClick={this.search.bind(this)} value="Add" className="btn btn-success"/>
            </div>
            <br/>
            <br/>
            <div className="inline-block col-sm-1" >
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Inject Id
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
        </ul>
        </div>
        </div>
        <div className="inline-block col-sm-3" >
            <div>
            <label>Quantity:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="w-50 inline-block" >
            <input id="qty" onChange={this.setSearchPID.bind(this)} type="text"  className=" form-control"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div className="card">
            <div className="card-header bg-info text-white">Prescription:</div>
        <div className="card-body">
            <div className="inline-block col-sm-1" >
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Drugs
            <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
        </ul>
        </div>
        </div>
        <div className="inline-block col-sm-3" >
            <div>
            <label>Quantity:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="w-50 inline-block" >
            <input id="qty" onChange={this.setSearchPID.bind(this)} type="text"  className=" form-control"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div>
            <input id="view" type="button" onClick={this.search.bind(this)} value="View" className="btn btn-success"/>&nbsp;&nbsp;
    <input id="update" type="button" onClick={this.search.bind(this)} value="Update" className="btn btn-success"/>&nbsp;&nbsp;&nbsp;
    <input id="ok" type="button" onClick={this.search.bind(this)} value="Ok" className="btn btn-success"/>

            </div>
            <br/>
            <br/>
            <br/>
            <Footer/>
            </div>
        );
    }
}

export default Diagosis;