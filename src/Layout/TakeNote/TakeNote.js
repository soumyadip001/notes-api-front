import React from "react"

import "./TakeNote.css"

import Row from "../../UI/Row/Row"
import Col from "../../UI/Col/Col"
import Image from "../../UI/Img/Img"
import Input from "../../UI/Input/Input"

const takeNote = (props) => {
    return (
        <Row>
            <Col className="12">
                <div className="input-group take-a-note">
                    <Input placeholder="Take a note..." />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <Image src="/open-iconic/svg/circle-check.svg" 
                                height="15" alt="save"
                                title="Save Note" />
                        </span>
                        <span className="input-group-text">
                            <Image src="/open-iconic/svg/pencil.svg" 
                                height="15" alt="Edit" />
                        </span>
                        <span className="input-group-text">
                            <Image src="/open-iconic/svg/image.svg" 
                                height="15" alt="Add Image" />
                        </span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default takeNote