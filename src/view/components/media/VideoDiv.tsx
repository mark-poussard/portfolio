import React from 'react';
import './VideoDiv.scss';

export interface IVideoDivProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>{

}

const VideoDiv : React.FC<IVideoDivProps> = props => {
    let {className, controls, ...otherProps} = props;
    className = (className != null)?className:"";
    controls = (controls != null)?controls:true;
    return (
        <video className={`video-div ${className}`} controls={controls} {...otherProps}/>
    )
}
export default VideoDiv;