import React from 'react';
import {Col, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';

const SideNav:React.FC = () => {

    return(
            <div className="side-nav-bar m-0" >
                <Row className="p-0">
                    <Col xs={12} className="brand-name-background mt-3" >
                        <h1 className="text-white text-center mt-3 brand-name">Jeewantha</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <Link to="/" >
                                <li>
                                    &nbsp;&nbsp;<i className="feather icon-user" />
                                    &nbsp;&nbsp;Profile
                                </li>
                            </Link>
                            <Link to="/stats" >
                                <li>
                                    &nbsp;&nbsp;<i className="feather icon-pie-chart"/>
                                    &nbsp;&nbsp;Stats
                                </li>
                            </Link>
                            <Link to="/education">
                                <li>
                                    &nbsp;&nbsp;<i className="feather icon-hard-drive"/>
                                    &nbsp;&nbsp;Education
                                </li>
                            </Link>
                            <Link to="/skills">
                                <li>
                                    &nbsp;&nbsp;<i className="feather icon-bar-chart-2"/>
                                    &nbsp;&nbsp;Skills
                                </li>
                            </Link>
                            <Link to="profile">
                                <li>
                                    &nbsp;&nbsp;<i className="feather icon-user" />
                                    &nbsp;&nbsp;Profile
                                </li>
                            </Link>
                            <Link to="contact" >
                                <li>
                                    &nbsp;&nbsp;<i className="feather icon-smartphone"/>
                                    &nbsp;&nbsp;Contact
                                </li>
                            </Link>

                        </ul>
                    </Col>
                </Row>
                {/*<Navbar expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Row className="side-nav-bar-item">
                            <Col className="p-1">
                                <ul className="navbar-nav mr-auto flex-column vertical-nav">
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-user"/>
                                            &nbsp;&nbsp;Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-pie-chart"/>
                                            &nbsp;&nbsp;Stats
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-hard-drive"/>
                                            &nbsp;&nbsp;Education
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-bar-chart-2"/>
                                            &nbsp;&nbsp;Skills
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-box"/>
                                            &nbsp;&nbsp;Portfolio
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            &nbsp;&nbsp;<i className="feather icon-smartphone"/>
                                            &nbsp;&nbsp;Contact
                                        </Nav.Link>
                                    </Nav.Item>
                                </ul>
                            </Col>
                        </Row>
                    </Navbar.Collapse>

                </Navbar>*/}
            </div>

    )
}

export default SideNav;