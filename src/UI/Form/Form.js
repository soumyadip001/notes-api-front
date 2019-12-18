import React from "react"

const form = (props) => {

    let compiledClasses = null

    const {
        className: providedClass,
        inline = false,
        action = "#",
        method = "GET",
        ...attributes
    } = props;

    compiledClasses = providedClass + " " + (inline ? 'form-inline' : null)

    return (
        <form 
            {...attributes} 
            className={compiledClasses} 
            action={action} 
            method={method}>
            {props.children}
        </form>
    )
}

export default form