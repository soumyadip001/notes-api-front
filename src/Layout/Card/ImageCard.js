import React from "react"

import "./card.css"

import Image from "../../UI/Img/Img"

const imageCard = (props) => {
    return (
        <div className="card" key={props.key}>
            <Image className="card-pin-icon" src="/open-iconic/svg/pin.svg" alt="Pin Note" />
            <Image className="card-img-top" src={props.imgSource} alt={props.caption} />
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.content }</p>
                <a href="/#" className="btn btn-primary action-button">More</a>
                <button>
                    <Image src="/open-iconic/svg/share.svg" alt="share" height="12" />
                </button>
                <button>
                    <Image src="/open-iconic/svg/delete.svg" alt="Delete" height="12" />
                </button>
                <button>
                    <Image src="/open-iconic/svg/tag.svg" alt="label" height="12" />
                </button>
            </div>
        </div>
    )
}

export default imageCard