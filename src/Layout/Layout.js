import React from "react"

import Aux from "../HOC/Wrapper"
import Header from "./Header/Header2"
import AddNote from "./AddNote/AddNote"
import CardsContainer from "./CardsContainer/CardsContainer"

import Row from "../UI/Row/Row"
import Col from "../UI/Col/Col"

import Note from "../Components/Note/Note"

const layout = (props) => {
    return (
        <Aux>
            <Header {...props} />
            <Row>
                <Col className="2">
                    {/* <Sidebar /> */}
                </Col>
                <Col className="10">

                    <AddNote />

                    <CardsContainer>
                        <Note {...props} />
                    </CardsContainer>
                </Col>
            </Row>
        </Aux>
    )
}

export default layout