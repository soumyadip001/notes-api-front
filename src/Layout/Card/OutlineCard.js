import React from "react"

import "./card.css"

import Image from "../../UI/Img/Img"

const oulinedCard = (props) => {

    let compiledClass = ""
    const dTextColor = "text-black"
    const dBgColor = "border-primary"

    if (typeof props.bgColor === "undefined") {
        compiledClass = "card " + dBgColor
    } else {
        compiledClass = "card " + "border-" + props.bgColor
    }

    compiledClass += " " + dTextColor

    return (
        <div className={compiledClass} key={props.key}>
            <Image className="card-pin-icon" src="/open-iconic/svg/pin.svg" alt="Pin Note" />
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.content }</p>
            </div>
        </div>
    )
}

export default oulinedCard