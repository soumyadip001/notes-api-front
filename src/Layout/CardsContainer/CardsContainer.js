import React from "react"

import Row from "../../UI/Row/Row"
import Col from "../../UI/Col/Col"

// import "./CardsContainer.css"

const cards = (props) => {
    return (
        
        <Row>
            <Col className="11">
            <div className="card-columns" style={{"columnCount": "5"}}>
                {props.children}
            </div>
            </Col>
        </Row>
    )
}

export default cards