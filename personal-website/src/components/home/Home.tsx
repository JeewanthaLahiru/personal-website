import React from "react";
import {Col, Form, Image, Row} from "react-bootstrap";
import Typescript from "../../assets/images/portfolio-image/typescript.png";

const Home:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="m-0 px-xl-4 py-4" >
                <Col xs={12}>
                    <h1 className="text-light text-left" >Hello I'm Jeewantha</h1>
                    <h3 className="text-light text-left" >I'm a fullstack Web/ Game developer</h3>
                </Col>
            </Row>
            <Row className="personal-details mx-0 px-xl-4">
                <Col xs={4}>
                    <Row className="m-0">
                        <Col xl={12} className="detail-col p-4">
                            <Row className="image-row" >
                                <Col className="image-area" xs={12}>
                                    <Image src={Typescript} />
                                </Col>
                            </Row>
                            <h2>Jeewantha Lahiru</h2>
                            <p>Galgoda, Mahawalathenna, Balangoda,</p>
                            <p>Sri lanka</p>
                            <p>Bsc (Hons) Software Engineering</p>
                            <p>University of Kelaniya</p>

                            <hr/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit</p>


                        </Col>
                    </Row>
                </Col>

                <Col xl={8}>
                    <Row className="m-0">
                        <Col className="detail-col pt-2" xs={12}>
                          <h4 className="text-left">About me</h4>
                            <Row className="mx-0 mt-1">

                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Mobile</Form.Label>
                                    <Form.Control type="text"
                                                  value="0710343246"
                                                  disabled={true}
                                    />
                                </Col>
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Email Address</Form.Label>
                                    <Form.Control type="text"
                                                  value="jeewanthalahiru1111@gmail.com"
                                                  disabled={true}
                                    />
                                </Col>

                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Date of Birth</Form.Label>
                                    <Form.Control type="text"
                                                  value="Jan 02 1998 (23)"
                                                  disabled={true}
                                    />
                                </Col>
                                <Col xs={6} className="pt-4">
                                    <Form.Label className="align-left" >Career goal</Form.Label>
                                    <Form.Control type="text"
                                                  value="Game Developer"
                                                  disabled={true}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;