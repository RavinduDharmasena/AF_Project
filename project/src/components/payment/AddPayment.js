import React,{ Component } from 'react'
import Axios from 'axios'

class AddPayment extends Component{

    constructor(props) {
        super(props);

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            console.log(date);

        this.state = {
            today: date,
            paymethod: "0",
            cashinputref:null,
            payedamount : null,
            balance : 0,
            cardtype : "visa",
            cardno : null,
            expdate : null,
            cvc : null
        }
    }

    setPayMethod(e){
        console.log(e.target.value);
        this.setState({paymethod:e.target.value});
        this.setState({balance:0});
    }

    setPayedAmount(e){
        console.log(e.target.value);
        this.setState({cashinputref:e.target});
        this.setState({payedamount:0+e.target.value});
    }

    payanddischargecash(){
        if(this.state.payedamount===null) {
            alert("Insufficient Payment empty!");
        }else{
            if(this.props.bill.totbill>this.state.payedamount){
                alert("Insufficient Payment!");
            }
            else{
                this.setState({balance:this.state.payedamount-this.props.bill.totbill});
                console.log("Your balance is : "+this.state.balance);
                var payobj = {
                    billid : this.props.bill.billid,
                    billamount : this.props.bill.totbill,
                    type : "cash",
                    cardtype : "",
                    cardno : null,
                    cvc : null
                }
                var regdata = {
                    status : "discharge",
                    discharged_date : this.state.today
                }
                function updatePayment() {
                    return Axios.post('http://localhost:8000/payment/addPayment',payobj);
                }

                function updateRegistration(pdata) {
                    return Axios.put('http://localhost:8000/payment/updatestatus/'+pdata._id,regdata);
                }

                Axios.all([updatePayment(), updateRegistration(this.props.patientdata)])
                    .then(Axios.spread(function (acct, perms) {
                        alert("Patient Discharged Successfully!");
                    }));
            }
        }

    }
    payanddischargecard(){
        console.log(this.state.cardtype);
        console.log(this.state.expdate);
        console.log(this.state.cardno);
        console.log(this.state.cvc);

        var expdateOk=true;
        var cardnoOk=true;
        var cvcOk=true;

        if(this.state.cardno===null || this.state.cardno==="" || this.state.cardno.length!==16 ){
            cardnoOk=false;
        }
        if(this.state.cvc===null || this.state.cvc==="" || this.state.cvc.length!==3){
            cvcOk=false;
        }
        if(this.state.expdate===null || this.state.expdate===""){
            expdateOk=false;
        }

        if(expdateOk && cardnoOk && cvcOk){
            console.log("true");
            var payobj = {
                billid : this.props.bill.billid,
                billamount : this.props.bill.totbill,
                type : "card",
                cardtype : this.state.cardtype,
                cardno : this.state.cardno,
                cvc : this.state.cvc
            }
            var regdata = {
                status : "discharge",
                discharged_date : this.state.today
            }
            function updatePayment() {
                return Axios.post('http://localhost:8000/payment/addPayment',payobj);
            }

            function updateRegistration(pdata) {
                return Axios.put('http://localhost:8000/payment/updatestatus/'+pdata._id,regdata);
            }

            Axios.all([updatePayment(), updateRegistration(this.props.patientdata)])
                .then(Axios.spread(function (acct, perms) {
                    alert("Patient Discharged Successfully!");
                }));
        }
        else{
            alert("Invalid Payment Details");
            console.log("false");
        }
    }

    setCardType(e){
        console.log(e.target.value);
        this.setState({cardtype:e.target.value});
    }

    setCardNo(e){
        console.log(e.target.value);
        this.setState({cardno:e.target.value});
    }

    setExpDate(e){
        console.log(e.target.value);
        this.setState({expdate:e.target.value});
    }

    setCVC(e){
        console.log(e.target.value);
        this.setState({cvc:e.target.value});
    }

    render(){
        let viewPayMethod;
        if(this.state.paymethod==="Cash"){
            console.log(this.props.bill.totbill);
            viewPayMethod = (
                <div>
                    <br/>
                    <div className="w-25 inline-block" >
                        <label>Amount :</label>
                    </div>
                    <div className="inline-block" >
                        <input id="amount" type="number" onChange={this.setPayedAmount.bind(this)} placeholder="Enter amount here" className="form-control"/>
                    </div>
                    <div className="inline-block col-sm-3" >
                        <input id="payndischargecashbtn" type="button" onClick={this.payanddischargecash.bind(this)} value="Pay and Discharge" className="btn btn-danger"/>
                    </div>
                </div>
            );
        }
        else if(this.state.paymethod==="Card Payment"){
            viewPayMethod = (
                <div>
                    <br/>
                    <div className="w-50 inline-block">
                        <div className="w-25 inline-block" >
                            <label className="label label-default">Card Type :</label>
                        </div>
                        <div className="inline-block" >
                            <select className="form-control" onChange={this.setCardType.bind(this)}>
                                <option>Visa</option>
                                <option>Master</option>
                            </select>
                        </div>
                        <br/>
                        <br/>
                        <div className="w-25 inline-block" >
                            <label>Exp. Date :</label>
                        </div>
                        <div className="inline-block" >
                            <input id="date" type="date"  onChange={this.setExpDate.bind(this)} className="form-control"/>
                        </div>

                    </div>
                    <div className="w-50 inline-block">
                        <div className="w-25 inline-block" >
                            <label>Card Number :</label>
                        </div>
                        <div className="inline-block" >
                            <input id="cardnumber" type="number" onChange={this.setCardNo.bind(this)} placeholder="Enter Card Number Here" className="form-control"/>
                        </div>
                        <br/>
                        <br/>
                        <div className="w-25 inline-block" >
                            <label>CVC :</label>
                        </div>
                        <div className="inline-block" >
                            <input id="cvc" type="number" onChange={this.setCVC.bind(this)} placeholder="Enter CVC Here" className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="inline-block " >
                        <input id="payndischargecardbtn" type="button" onClick={this.payanddischargecard.bind(this)} value="Pay and Discharge" className="btn btn-danger"/>
                    </div>
                </div>
            );
        }
        else{
            viewPayMethod = "";
        }


        return(
            <div className="inline-block col-sm-12">
                <br/>
                <div className="card">
                    <div className="card-header bg-info text-white">Add Payment</div>
                    <div className="card-body">
                        <select className="form-control" onChange={this.setPayMethod.bind(this)}>
                            <option>Select payment method...</option>
                            <option>Cash</option>
                            <option>Card Payment</option>
                        </select>
                        {viewPayMethod}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPayment;