function Invoice() {
    return (
        <div className="row">
            <div className="col-md-12 p-3">
                <div className="card">
                    <div className="card-header">
                        <div className="lead">Invoice List</div>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Invoice Number</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1004</td>
                                    <td>Google</td>
                                    <td>1200.00</td>
                                </tr>

                                <tr>
                                    <td>1003</td>
                                    <td>Microrosft</td>
                                    <td>1000.00</td>
                                </tr>

                                <tr>
                                    <td>1002</td>
                                    <td>Apple</td>
                                    <td>2200.00</td>
                                </tr>

                                <tr>
                                    <td>1001</td>
                                    <td>Facebook</td>
                                    <td>1500.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Invoice;