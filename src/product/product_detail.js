import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
const API_BASE = "https://nanoapi.nanosoft.co.za"
const API_KEY = "123987"

export default function ProductDetail() {
    const [product, setProduct] = useState({ stock_level: 0, name: "", unit_price: "", sn: "" })

    //hooks
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        getProduct();
    }, []);


    async function getProduct() {
        let _id = params.productId;
        let response = await fetch(`${API_BASE}/product/${_id}`, { headers: { "x-api-key": API_KEY } });
        let data = await response.json();
        setProduct(data)

    }

    function save() {
        console.log(product)
    }

    function cancel() {
        history.goBack();
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="lead">Product Detail</div>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Product Name" value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Serial Number</label>
                        <input type="text" className="form-control" placeholder="Product Name" value={product.sn} onChange={e => setProduct({ ...product, sn: e.target.value })} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Unit Price</label>
                        <input type="number" className="form-control" placeholder="Unit Price" value={product.unit_price} onChange={e => setProduct({ ...product, unit_price: e.target.value })} />

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Stock Level</label>
                        <input type="number" className="form-control" placeholder="Stock Level" value={product.stock_level} onChange={e => setProduct({ ...product, stock_level: e.target.value })} />

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