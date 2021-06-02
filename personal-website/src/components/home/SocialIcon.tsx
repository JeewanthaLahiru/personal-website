import React from 'react';
import {Col, Image} from "react-bootstrap";

type socialIconProps = {
    imageLink : string,
    socialLink : string
}

const SocialIcon:React.FC<socialIconProps> = (props) => {
    return(
        <div className="socialIcon col-md-15" >
            <div className="innerDiv">
                <Image src={props.imageLink} />
            </div>

        </div>
    )
}

export default SocialIcon;