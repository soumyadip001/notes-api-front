import React from "react"

import Navbar from "../../UI/Navbar/Navbar";
import Image from "../../UI/Img/Img";
import Navlink from "../../UI/NavLink/Navlink";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";

import "./Header.css";

const header = (props) => {
    return (
        <Navbar>
            <Navlink href="/#" className="navbar-menu-icon">
                <Image 
                    src="/open-iconic/svg/menu.svg"
                    height="15" 
                    alt="Menu" />
            </Navlink>

            <Navlink href="/#" className="navbar-brand-logo">
                <Image 
                    src="/images/keep.png"
                    width="35" height="35"
                    alt="Menu" />
                Keep
            </Navlink>
 
            <Form className="navbar-search-section" inline method="POST">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <Image
                                src="/open-iconic/svg/magnifying-glass.svg" 
                                height="15"
                                alt="Search" />
                        </span>
                    </div>
                    <Input type="text"
                        placeholder="Search" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1" />
                </div>
            </Form>
 
            <div className="float-right navbar-options">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">
                            <Image src="/open-iconic/svg/reload.svg" height="15" alt="refresh" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            <Image src="/open-iconic/svg/grid-two-up.svg" height="15" alt="change view" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            <Image src="/open-iconic/svg/cog.svg" height="15" alt="settings" />
                        </a>
                    </li>
                </ul>
            </div>
        </Navbar>
    )
}

export default header