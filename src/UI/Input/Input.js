import React from "react"

const input = (props) => {

    const bootstrapClass = "form-control"
    let compiledClasses = bootstrapClass

    const {
        class: providedClass,
        type = "text",
        ...attributes
    } = props;

    console.log("====> "+providedClass)

    if (providedClass !== null && (typeof providedClass !== 'undefined')) {
        compiledClasses += " " + providedClass
    }

    return (
        <input type={type} className={compiledClasses} {...attributes} />
    )
}

export default input