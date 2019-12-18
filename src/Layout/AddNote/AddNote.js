import React from "react"
import { Link } from "react-router-dom"

// import "./TakeNote.css"

import Row from "../../UI/Row/Row"
import Col from "../../UI/Col/Col"
import Image from "../../UI/Img/Img"
// import Input from "../../UI/Input/Input"

const takeNote = (props) => {
    return (
        <Row className="align-items-center">
            <Col className="6 offset-md-2" style={{marginBottom: "20px"}}>
                <Link className="btn btn-block btn-primary" to="/add-post">
                    <Image src="/open-iconic/svg/pencil.svg" height="10" alt="logout" style={{verticalAlign: "unset"}} />
                    &nbsp;&nbsp;
                    Create Post
                </Link>
            </Col>
        </Row>
    )
}

export default takeNote