import React from 'react'

const col = (props) => {

    const {
        className = 12,
        ...attributes
    } = props



    return (
        <div className={"col-" + className} {...attributes}>
            {props.children}
        </div>
    )
}

export default col;