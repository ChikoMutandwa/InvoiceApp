import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const API_BASE = "https://nanoapi.nanosoft.co.za"
const API_KEY = "123987"

function Customer() {
    const [customerData, setCustomerData] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getCustomers();
    }, []
    );

    async function getCustomers() {
        let response = await fetch(`${API_BASE}/customer`, { headers: { "x-api-key": API_KEY } });
        let data = await response.json();
        setCustomerData(data)
    }

    function renderTableRow(item, key) {
        return (
            <tr key={key} onClick={() => history.push(`/customer/${item._id}`)}>
                <td>{item.name}</td>
                <td >{item.contact_email}</td>
            </tr>
        )
    }

    return(
        <div className="row">
            <div className="col-md-12 p-3">
                <div className="card">
                    <div className="card-header">
                        <div className="lead">Customer List</div>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-hover table-striped ">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customerData.sort((a, b) => a.name.localeCompare(b.name)).map(renderTableRow)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer;