import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import UnityLogo from "../../assets/images/portfolio-image/unity-logo.png";

const PortfolioItem:React.FC = () => {
    return(
        <Col xs={12} sm={12} lg={6} xl={4} className="portfolio-item-border m-0 p-4">
            <Row className="m-0 portfolio-item p-3" >
                <Col xs={12} >
                    <Row className="title-row m-0 py-2">
                        <Col xs={3} className="title-logo">
                            <Image src={UnityLogo} />
                        </Col>
                        <Col xs={9} className="title-name" >
                            <Row>
                                <Col xs={12} className="title-main" >MainTitle</Col>
                                <Col xs={12} className="title-time" >Time Duration</Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="m-0 description" >
                        <Col xs={12} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Col>

                    </Row>
                    <Row className="justify-content-center mt-3" >
                        <Col xs={3}> <i className="feather icon-eye" ></i> Source </Col>
                        <Col xs={3}> <i className="feather icon-link"></i> Demo </Col>
                    </Row>
                    <hr/>
                    <Row className="m-0 technology-row justify-content-center " >
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                        <Col xs={2} className="tech-item">
                            <Image src={UnityLogo}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default PortfolioItem;