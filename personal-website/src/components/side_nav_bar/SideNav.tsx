import React from 'react';
import {Button, Col, Form, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";

const SideNav:React.FC = () => {

    return(
            <Col md={3} className="side-nav-bar m-0" >
                <Navbar expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Row className="side-nav-bar-item">
                            <Col className="p-1">
                                <ul className="navbar-nav mr-auto flex-column vertical-nav">
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            Education
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            Portfolio
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-left">
                                            Contact
                                        </Nav.Link>
                                    </Nav.Item>
                                </ul>
                            </Col>
                        </Row>
                    </Navbar.Collapse>

                </Navbar>
            </Col>

    )
}

export default SideNav;