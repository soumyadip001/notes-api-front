import React from "react";

const navlink = (props) => {

    let compiledClasses = null
    const bootstrapClass = "navbar-brand"
    const providedClass = props.className

    if (providedClass !== undefined || providedClass !== null) {
        compiledClasses = bootstrapClass + " " + providedClass
    } else {
        compiledClasses = bootstrapClass
    }

    return (
        <a className={compiledClasses} href={props.href}>
            {props.children}
        </a>
    )
}

export default navlink;