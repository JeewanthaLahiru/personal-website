import React from 'react';
import { Image} from "react-bootstrap";

type socialIconProps = {
    imageLink : string,
    socialLink : string
}

const handleOnClick = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const SocialIcon:React.FC<socialIconProps> = (props) => {
    return(
        <div className="socialIcon col-md-15" >
            <div onClick={() => handleOnClick(props.socialLink)} className="innerDiv">
                <Image src={props.imageLink} />
            </div>

        </div>
    )
}

export default SocialIcon;