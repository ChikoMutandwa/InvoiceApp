import { Link, Route, Switch } from "react-router-dom";

function Sidenav(props) {

    function getActiveStatus(url) {
        return props.history.location.pathname.indexOf(url) === 0 ? "active" : ""
    }

    return (
        <div className="nav d-flex flex-column ">
            <div className="applogo d-flex p-4 align-items-center">
                <div className="mx-2 font-weight-lighter text-light fs-3 fw-lighter ">App Name</div>
            </div>
            <ul className="menu mt-5 text-light">
                <li className={"d-flex align-items-center mb-4 lead " + getActiveStatus("/dashboard")}>
                    <i className="bi-speedometer2" />
                    <div className="mx-2"><Link to="/dashboard">Dashboard</Link></div>
                </li>
                <li className={"d-flex align-items-center mb-4 lead " + getActiveStatus("/invoice")}>
                    <i className="bi-files" />
                    <div className="mx-2"><Link to="/invoice">Invoice</Link></div>
                </li>
                <li className={"d-flex align-items-center mb-4 lead " + getActiveStatus("/customer")}>
                    <i className="bi-people" />
                    <div className="mx-2"><Link to="/customer">Customers</Link></div>
                </li>
                <li className={"d-flex align-items-center mb-4 lead " + getActiveStatus("/product")}>
                    <i className="bi-box" />
                    <div className="mx-2"><Link to="/product">Products</Link></div>
                </li>
            </ul>
        </div>
    );
}

export default Sidenav;