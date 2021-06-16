import React from 'react';
import Github from "../../assets/images/social media image/github.png";
import Stack from "../../assets/images/social media image/stackoverflow.png";
import Medium from "../../assets/images/social media image/medium.png";
import {Col, Image, Row} from "react-bootstrap";

const Stats:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="mx-0 pt-5">
                <Col xs={6} className="pr-xl-0">
                    <Row className="m-0 p-0">
                        <Col xs={12} className="stat-item p-0" >
                            <Row className="m-0">
                                <Col xs={2}>
                                    <Image src={Github} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row className="mx-0">
                        <Col xs={12} className="stat-item" >
                            <Row className="m-0">
                                <Col xs={2}>
                                    <Image src={Medium} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="stat-item" >
                            <Row className="m-0">
                                <Col xs={2}>
                                    <Image src={Stack} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Stats;