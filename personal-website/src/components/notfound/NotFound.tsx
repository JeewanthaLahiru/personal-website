import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Gear from "../../assets/images/gifs/gear.gif";

const NotFound:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="not-found m-0 align-items-center" >
                <Col xs={12} >
                    <Image src={Gear} />
                    <h1 className="text-white">Still under development...</h1>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default NotFound;