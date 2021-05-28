import React from 'react';
import {Col, Row} from "react-bootstrap";

const PortfolioItem:React.FC = () => {
    return(
        <Col xs={6} sm={4} className="portfolio-item-border m-0 p-4">
            <Row className="m-0 portfolio-item p-3" >
                <Col xs={12} >
                    <Row className="title-row m-0">
                        <Col xs={3} className="title-logo">Logo</Col>
                        <Col xs={9} className="title-name" >Title</Col>
                    </Row>
                    <hr/>
                    <Row className="m-0" >
                        <Col xs={12} >Description</Col>
                    </Row>
                    <hr/>
                    <Row className="m-0" >
                        <Col xs={12}>Social Links</Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default PortfolioItem;