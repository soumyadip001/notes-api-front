import React from "react"

import Navbar from "../../UI/Navbar/Navbar";
// import Image from "../../UI/Img/Img";
// import Navlink from "../../UI/NavLink/Navlink";
// import Form from "../../UI/Form/Form";
// import Input from "../../UI/Input/Input";

import Logout from "../../Components/Logout/Logout"

// import "./Header.css";

const header = (props) => {
    return (

        <Navbar>
            <div className="container">
                <a className="navbar-brand" href="#">Dashboard</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Logout />
                    </li>
                </ul>
            </div>
        </Navbar>
    )
}

export default header