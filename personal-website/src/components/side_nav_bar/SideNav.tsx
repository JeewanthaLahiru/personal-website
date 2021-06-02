import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

const SideNav:React.FC = () => {

    const [mobileNavBar, setMobileNavBar] = useState(false);
    const handleOnNavBtn = () => {
        setMobileNavBar(!mobileNavBar);
    }

    const handleOnCloseOut = () => {
        setMobileNavBar(false);
    }

    const ref = useDetectClickOutside({onTriggered:handleOnCloseOut});

    return(
        <React.Fragment>
            <div onClick={handleOnNavBtn} ref={ref} className="mobile-nav-button">
                {mobileNavBar? <i className="feather icon-x text-white" ></i> : <i className="feather icon-menu text-white" ></i>}
            </div>

            {   mobileNavBar &&
                <div className="mobile-navbar">
                    <Row className="m-0 py-5" >
                        <Col xs={12} className="p-3" >Home</Col>
                        <Col xs={12} className="p-3" >Home</Col>
                        <Col xs={12} className="p-3" >Home</Col>
                        <Col xs={12} className="p-3" >Home</Col>
                        <Col xs={12} className="p-3" >Home</Col>
                        <Col xs={12} className="p-3" >Home</Col>

                    </Row>
                </div>
            }


            <div className="side-nav-bar m-0" >
                <Row className="m-0 mobile-navbar">

                </Row>
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
                                    &nbsp;&nbsp;<i className="feather icon-box" />
                                    &nbsp;&nbsp;Portfolio
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
            </div>
        </React.Fragment>
    )
}

export default SideNav;