import React from 'react';
import Github from "../../assets/images/social media image/github.png";
import Stack from "../../assets/images/social media image/stackoverflow.png";
import Medium from "../../assets/images/social media image/medium.png";
import {Col, Image, Row} from "react-bootstrap";

const Stats:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="mx-0 pt-5 stat-page">
                <Col xs={7} className="pr-xl-0 ">
                    <Row className="m-0 p-0">
                        <Col xs={12} className="stat-item " >
                            <Row className="m-0">
                                <Col xs={2}>
                                    <Image className="social-icon" src={Github} />
                                </Col>
                                <Col xs={10} className="pl-5">
                                    <h4 className="text-left stat-title mt-2" >Github</h4>
                                    <h5 className="text-left stat-subtitle " >49 Repositories</h5>
                                    <br/>
                                    <h5 className="text-left stat-details" >
                                        <i className="feather icon-users"/>
                                        &nbsp; 28 followers
                                    </h5>
                                    <h5 className="text-left stat-details" >
                                        <i className="feather icon-user-check"/>
                                         &nbsp; 48 following
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="m-0">
                                <Col xs={12}>
                                    <hr/>
                                    <h5 className="text-left mt-3 mb-3 contri" >Contributions</h5>
                                </Col>
                                <Col xs={10} className="mb-4">
                                    <img className="gitDetail" src="https://github-readme-stats.vercel.app/api?username=JeewanthaLahiru&&show_icons=true&title_color=0c9100&icon_color=000000&text_color=000000&bg_color=ffffff"/>

                                </Col>
                                <Col xs={12} className="mb-5 mt-3">
                                    <img className="gitChart" src="http://ghchart.rshah.org/JeewanthaLahiru" alt="jeewanthalahiru's Github chart" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={5}>
                    <Row className="mx-0">
                        <Col xs={12} className="stat-item" >
                            <Row className="m-0">
                                <Col xs={2}>
                                    <Image className="social-icon" src={Medium} />
                                </Col>
                                <Col xs={10} className="pl-5">
                                    <h4 className="text-left stat-title mt-2" >Medium</h4>
                                    <h5 className="text-left stat-subtitle " >13 Articles</h5>
                                    <br/>
                                    <h5 className="text-left stat-details" >
                                        <i className="feather icon-users"/>
                                        &nbsp; 43 followers
                                    </h5>
                                    <h5 className="text-left stat-details" >
                                        <i className="feather icon-user-check"/>
                                        &nbsp; 70 following
                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="stat-item" >
                            <Row className="m-0">
                                <Col xs={2}>
                                    <Image className="social-icon" src={Stack} />
                                </Col>
                                <Col xs={10} className="pl-5">
                                    <h4 className="text-left stat-title mt-2" >Stack<b>overflow</b></h4>
                                    <h5 className="text-left stat-subtitle " >302 Reputations</h5>
                                    <br/>

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