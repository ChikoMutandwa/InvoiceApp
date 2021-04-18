import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const API_BASE = "https://nanoapi.nanosoft.co.za"
const API_KEY = "123987"

function Product() {
    //State
    const [productData, setProductData] = useState([])

    //use the useHistory Hook from react-router
    const history = useHistory();

    //Onload: Note to include empty array to execute only once
    useEffect(() => {
        getProducts();
    }, []);


    async function getProducts() {
        let response = await fetch(`${API_BASE}/product`, { headers: { "x-api-key": API_KEY } });
        let data = await response.json();
        setProductData(data)
    }

    function getClassName(item) {
        return item.stock_level < 5 ? "text-danger" : "";
    }

    function renderTableRow(item, key) {
        return (
            <tr key={key} onClick={() => history.push(`/product/${item._id}`)} className={getClassName(item)} >
                <td>{item.name}</td>
                <td >{item.sn}</td>
                <td className="text-end" >{item.unit_price}</td>
                <td className="text-end" >{item.stock_level}</td>
            </tr>
        )
    }

    return (
        <div className="row">
            <div className="col-md-12 p-3">
                <div className="card">
                    <div className="card-header">
                        <div className="lead">Product List</div>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr className="bg-dark text-white">
                                    <th className="text-center">Name</th>
                                    <th className="text-center" >Serial Number</th>
                                    <th className="text-center" >Unit Price</th>
                                    <th className="text-center" >Stock Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productData.sort((a, b) => a.name.localeCompare(b.name)).map(renderTableRow)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;