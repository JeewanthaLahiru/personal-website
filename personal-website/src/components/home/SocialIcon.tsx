import React from 'react';

type socialIconProps = {
    imageLink : string,
    socialLink : string
}

const SocialIcon:React.FC<socialIconProps> = (props) => {
    return(
        <div>
            Hello social Icon
        </div>
    )
}

export default SocialIcon;