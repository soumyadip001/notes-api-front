import React from "react"
import { Link } from "react-router-dom"

import "./card.css"

import Image from "../../UI/Img/Img"

const simpleCard = (props) => {

    let compiledClass = ""
    const dTextColor = "text-white"
    const editUrl = "/edit-post/" + props.postId

    if (typeof props.bgColor === "undefined") {
        let rand = Math.floor(Math.random() * Math.floor(4))
        if (rand === 0) {
            compiledClass = "card bg-primary"
        } else if (rand === 1) {
            compiledClass = "card bg-warning"
        } else if (rand === 2) {
            compiledClass = "card bg-success"
        } else {
            compiledClass = "card bg-danger"
        }
        
    } else {
        compiledClass = "card bg-" + props.bgColor
    }

    compiledClass += " " + dTextColor

    return (
        <div className={compiledClass} key={props.postId}>
            
            <a onClick={props.remove} href="/#">
                <Image className="card-remove-icon" src="/open-iconic/svg/trash.svg" alt="Edit Note" />
            </a>
            
            <div className="card-body">
                <Link to={editUrl}>
                    <h5 className="card-title">{ props.title }</h5>
                    <p className="card-text">{ props.content }</p>
                </Link>
            </div>
        </div>
    )
}

export default simpleCard