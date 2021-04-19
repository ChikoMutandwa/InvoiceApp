import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
const API_BASE = "https://nanoapi.nanosoft.co.za"
const API_KEY = "123987"

export default function CustomerDetail(){
    const [customer, setCustomer] = useState({name: "", contact_email: ""})

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        getCustomer();
    }, []
    );

    async function getCustomer() {
        let _id = params.customerId;
        let response = await fetch(`${API_BASE}/customer/${_id}`, { headers: { "x-api-key": API_KEY } });
        let data = await response.json();
        setCustomer(data)
    }

    function save() {
        let _id = params.customerId;
        console.warn("item", customer)
        fetch(`${API_BASE}/customer/${_id}`, { 
            method: 'PUT',
            headers: { 
                "x-api-key": API_KEY,
                'Accept':'application/json',
                'Content-Type': 'application/json' 
            },
            body:JSON.stringify(customer)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getCustomer()
            })
        })
        
    }

    function cancel() {
        history.goBack();
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="lead">Customer Detail</div>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Customer Name" value={customer.name} onChange={e => setCustomer({ ...customer, name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Customer Email" value={customer.contact_email} onChange={e => setCustomer({ ...customer, contact_email: e.target.value })} />
                    </div>

                    <div className="mb-3 d-flex justify-content-between">
                        <button onClick={cancel} className="btn btn-danger">Cancel</button>
                        <button onClick={save} className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </>


    );
}