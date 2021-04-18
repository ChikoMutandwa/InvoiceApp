function Header(props) {

    function handleMenu() {
        let nav = document.querySelector(".nav");
        nav.classList.toggle("hide");
        nav.classList.toggle("active");
    }

    return (
        <div className="header d-flex justify-content-between align-items-center px-4 ">
            <div className="d-flex align-items-center">
                <a onClick={handleMenu} href="#" id="menu"><i className="bi-list display-6" /> </a>
                <h3 className="display-6 mx-3 mb-0">
                    {props.title}
                </h3>
            </div>
            <ul className="tools d-flex">
                <li className="mx-2"><i className="bi-gear fs-4" /></li>
                <li className="mx-2"><i className="bi-box-arrow-right fs-4 " /></li>
            </ul>
        </div>
    );
}

export default Header;