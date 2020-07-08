import React from 'react';
import './ImageDiv.scss';

export interface IImageDivProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
    src : string;
}

const ImageDiv : React.FC<IImageDivProps> = props => {
    let {className, style, ...otherProps} = props;
    className = (className != null)? className : "";
    style = (style != null)? style : {};
    style = Object.assign(style, {
        // backgroundImage : `url('${props.src}')`
    });
    return (
        <img className={`image-div ${className}`} style={style} {...otherProps}/>
    )
}
export default ImageDiv;