import React from 'react'

const row = (props) => {

    let compiledStyle = null

    const {
        className = "",
        noGutters = false,
        form = false,
        ...attributes
    } = props

    compiledStyle = (form ? "form-row" : "row") + " " + (noGutters ? "no-gutters" : "") + " " + className

    return (
        <div className={compiledStyle} {...attributes}>
            {props.children}
        </div>
    )
}

export default row;