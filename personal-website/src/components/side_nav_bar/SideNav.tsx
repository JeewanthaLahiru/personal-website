import React from 'react';
import {Col, Nav, Navbar, Row} from "react-bootstrap";

const SideNav:React.FC = () => {

    return(
            <div className="side-nav-bar m-0" >
                <Navbar expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Row className="p-0">
                            <Col xs={12} className="brand-name-background" >
                                <h1 className="text-white text-center mt-3 brand-name">Jeewantha</h1>
                            </Col>
                        </Row>
                        <Row className="side-nav-bar-item">
                            <Col className="p-1">
                                <ul className="navbar-nav mr-auto flex-column vertical-nav">
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-user" />
                                            &nbsp;&nbsp;Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-pie-chart" />
                                            &nbsp;&nbsp;Stats
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-hard-drive" />
                                            &nbsp;&nbsp;Education
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-bar-chart-2" />
                                            &nbsp;&nbsp;Skills
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-box" />
                                            &nbsp;&nbsp;Portfolio
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-smartphone" />
                                            &nbsp;&nbsp;Contact
                                        </Nav.Link>
                                    </Nav.Item>
                                </ul>
                            </Col>
                        </Row>
                    </Navbar.Collapse>

                </Navbar>
            </div>

    )
}

export default SideNav;