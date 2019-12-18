import React from "react"

const formError = (props) => {
    return (
        <div className="alert alert-danger">
            <strong>Error! </strong> {props.text}
        </div>
    )
}

export default formError