import React,{ Component } from 'react'

class PatientBill extends Component{


    setShowPayment(){
        this.props.setShowPayment();
    }

    render(){
        let pbill = this.props.patientbill;
        let viewdrugbill;
        let viewinjectionbill;
        let printbillid;
        let printphyexambill;
        let printsewingbill;
        let printboardingbill;
        let printtotbill;

        console.log(pbill);
        if(pbill !==null && pbill!=="") {
            printbillid = (
                <td>{pbill.billid}</td>
            )
            printphyexambill = (
                <td align="right">{pbill.phyexambill}</td>
            )
            printsewingbill = (
                <td align="right">{pbill.sewingbill}</td>
            )
            printboardingbill = (
                <td align="right">{pbill.boardingbill}</td>
            )
            printtotbill = (
                <td align="right">{pbill.totbill}</td>
            )
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
                                <tr key={i}>
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
                                <tr key={i}>
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
                        {printbillid}
                    </tr>
                    </tbody>
                </table>
                {viewdrugbill}
                {viewinjectionbill}
                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Physical Exam Fee</th>
                            {printphyexambill}
                        </tr>
                        <tr>
                            <th>Sewing Fee</th>
                            {printsewingbill}
                        </tr>
                        <tr>
                            <th>Boarding Fee</th>
                            {printboardingbill}
                        </tr>
                    </tbody>
                </table>
                <table className="table table-bordered table-hover">
                    <tbody>
                    <tr>
                        <th>Total Bill</th>
                        {printtotbill}
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-success w-100" onClick={this.setShowPayment.bind(this)}>Pay Bill</button>
            </div>
        );
    }
}

export default PatientBill;