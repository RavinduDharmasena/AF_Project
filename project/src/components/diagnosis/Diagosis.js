import React,{ Component } from 'react'
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";


class Diagosis extends Component{
    render(){
        return(
            <div>

                <div>
                    <div className="cont">
                        <p className="text">
                            <label htmlFor="usr">NIC: </label>
                        </p>
                        <input type="text" className="form-control" id="usr"/>
                    </div>
                    <div className="cont">
                        <p className="text">
                            <label htmlFor="usr">Patient ID: </label>
                        </p>
                        <input type="text" className="form-control" id="usr"/>
                    </div>
                </div>

                <div>
                    <div className="cont">
                        <p className="text">Complaints</p>
                        <form>
                            <div>
                                <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="cont">
                        <p className="text">Allergies</p>
                        <form>
                            <div>
                                <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="cont">
                        <p className="text">Physical Examination</p>
                        <form>
                            <div>
                                <textarea className="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="cont1">
                        <p className="text">Treatement: </p>
                        <form>
                            <div>
                                <label className="text">
                                    <input name="inject" type="checkbox"/> Injection
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-primary btn-sm"> add</button>
                                </label>
                                <label className="text">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
                                    name="inject" type="checkbox"/> Sewing
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-primary btn-sm"> add</button>
                                </label>
                            </div>
                        </form>
                        <div>
                            <button className="btn btn-primary dropdown-toggle" type="button"
                                    data-toggle="dropdown">InjectID
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="text">
                                <label htmlFor="usr">quantity </label>
                            </p>
                            <input type="text" className="form-control" id="usr"/>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="cont2">
                        <p className="text">Prescription: </p>
                        <form>
                            <div>
                                <button className="btn btn-primary dropdown-toggle" type="button"
                                        data-toggle="dropdown">Drugs
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className="text">
                                    <label htmlFor="usr">quantity </label>
                                </p>
                                <input type="text" className="form-control" id="usr"/>
                            </div>
                            <br/>
                            <button type="button" className="btn btn-primary btn-sm"> View</button>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-primary btn-sm"> Update</button>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-primary btn-sm"> OK</button>

                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Diagosis;