import React from 'react';
import {Col, Image} from "react-bootstrap";

type socialIconProps = {
    imageLink : string,
    socialLink : string
}

const SocialIcon:React.FC<socialIconProps> = (props) => {
    return(
        <Col xs={2} className="socialIcon" >
           <Image src={props.imageLink} />
        </Col>
    )
}

export default SocialIcon;