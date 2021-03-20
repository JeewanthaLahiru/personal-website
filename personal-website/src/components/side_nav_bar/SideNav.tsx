import React from 'react';
import {Button, Col, Form, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";

const SideNav:React.FC = () => {
    return(
            <Col md={3} className="side-nav-bar" >
                <Navbar bg="light" expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Row className="side-nav-bar-item">
                            <Col>
                                <ul className="navbar-nav mr-auto flex-column vertical-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Another Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Setting</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Navbar.Collapse>

                </Navbar>
            </Col>

    )
}

export default SideNav;