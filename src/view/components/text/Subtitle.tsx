import React from 'react';
import { ILocalProps } from '../local/Local';
import LocalText from '../local/LocalText';
import './Subtitle.scss';

interface ISubtitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    children : ILocalProps;
}

const Subtitle = (props : ISubtitleProps) => {
    let {children, className, ...otherProps} = props;
    className = (className != null)?className:"";
    return (
        <h2 className={`subtitle ${className}`} {...otherProps}>
            <LocalText {...children} />
        </h2>
    )
}
export default Subtitle;