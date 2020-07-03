import React from 'react';
import './InlineSvg.scss';

export interface IInlineSvgProps extends React.SVGProps<SVGSVGElement>{

}

const InlineSvg : React.FC<IInlineSvgProps> = props => {
    let {className, ...otherProps} = props;
    className = (className != null)?className:"";
    return (
        <svg className={`inline-svg ${className}`} {...otherProps}>
            {props.children}
        </svg>
    )
}
export default InlineSvg;