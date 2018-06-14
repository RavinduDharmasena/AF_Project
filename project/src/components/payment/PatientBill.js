import React,{ Component } from 'react'

class PatientBill extends Component{

    /*constructor(props){
        super(props);

        this.state = {
            patientbill : this.props.patientbill
        }
    }*/

    componentWillMount(){
       // this.setState({patientbill:this.props.patientbill});
    }


    render(){
        let pbill = this.props.patientbill;
        let viewdrugbill;
        let viewinjectionbill;
        console.log(pbill);
        if(pbill !==null && pbill!=="") {
            if (pbill.drugbill !== null) {
                console.log("full drug array")
                viewdrugbill = (
                    <table className="table table-bordered table-hover">
                        <tbody>
                        <tr>
                            <th>Drug Name</th>
                            <th>Qty</th>
                            <th align="right">SubTotal (Rs.)</th>
                        </tr>
                        {pbill.drugbill.map((drug, i) => {
                            return (
                                <tr>
                                    <td>{drug.name}</td>
                                    <td>{drug.qty}</td>
                                    <td align="right">{drug.subprice}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <th>SubTotal</th>
                            <td colSpan="2" align="right">{pbill.totdrugbill}</td>
                        </tr>
                        </tbody>
                    </table>
                )
            } else {
                console.log("empty drug array");
                viewdrugbill = "";
            }

            if (pbill.injectionbill !== null) {
                console.log("full injection array")
                viewinjectionbill = (
                    <table className="table table-bordered table-hover">
                        <tbody>
                        <tr>
                            <th>Injection Name</th>
                            <th>Qty</th>
                            <th align="right">SubTotal (Rs.)</th>
                        </tr>
                        {pbill.injectionbill.map((inj, i) => {
                            return (
                                <tr>
                                    <td>{inj.name}</td>
                                    <td>{inj.qty}</td>
                                    <td align="right">{inj.subprice}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <th>SubTotal</th>
                            <td colSpan="2" align="right">{pbill.totinjbill}</td>
                        </tr>
                        </tbody>
                    </table>
                )
            } else {
                console.log("empty drug array");
                viewinjectionbill = "";
            }
        }

        return(
            <div>
                <table className="table table-bordered table-hover">
                    <tbody>
                    <tr>
                        <th>Bill ID</th>
                        <td>{pbill.billid}</td>
                    </tr>
                    </tbody>
                </table>
                {viewdrugbill}
                {viewinjectionbill}
                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Physical Exam Fee</th>
                            <td align="right">{pbill.phyexambill}</td>
                        </tr>
                        <tr>
                            <th>Sewing Fee</th>
                            <td align="right">{pbill.sewingbill}</td>
                        </tr>
                        <tr>
                            <th>Boarding Fee</th>
                            <td align="right">{pbill.boardingbill}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered table-hover">
                    <tbody>
                    <tr>
                        <th>Total Bill</th>
                        <td align="right">{pbill.totbill}</td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-success w-100">Pay Bill</button>
            </div>
        );
    }
}

export default PatientBill;