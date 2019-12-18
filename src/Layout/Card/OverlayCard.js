import React from "react"

import "./card.css"

import Image from "../../UI/Img/Img"

const overlayCard = (props) => {

    const textColor = "text-white"

    let compiledClass = "card " + textColor

    return (
        <div className={compiledClass} key={props.key}>
            <Image className="card-pin-icon" src="/open-iconic/svg/pin.svg" alt="Pin Note" />
            <Image className="card-img" src={props.imgSource} alt={props.caption} />
            <div className="card-img-overlay">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.content }</p>
            </div>
        </div>
    )
}

export default overlayCard