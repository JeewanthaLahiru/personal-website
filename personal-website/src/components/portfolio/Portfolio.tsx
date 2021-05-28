import React from 'react';
import {Col, Row} from "react-bootstrap";

const Portfolio:React.FC = () => {
    return(
        <Col xs={6}>
            <Row>
                <Col xs={3}>Logo</Col>
                <Col xs={9}>Title</Col>
            </Row>
            <Row>
                <Col xs={12} >Description</Col>
            </Row>
            <Row>
                <Col xs={12}>Social Links</Col>
            </Row>
        </Col>
    )
}

export default Portfolio;