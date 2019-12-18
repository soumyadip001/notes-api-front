import React from "react";

import classes from "./Navbar.module.css";

const navbar = (props) => {

    const bootstrapClasses = "navbar navbar-expand-lg navbar-light bg-light mb-3 " 
    let allClasses = bootstrapClasses + classes.WebsiteNavbar

    return (
        <div className={allClasses}>
            {props.children}
        </div>
    )
}

export default navbar;