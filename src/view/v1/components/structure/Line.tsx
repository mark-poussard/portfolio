import React from 'react';
import './Line.scss';

interface ILineProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    left ?: React.ReactNode;
    right ?: React.ReactNode;
    leftWidthPrct ?: number;
}

const Line : React.FC<ILineProps> = props => {
    let {left, right, leftWidthPrct, className, ...otherProps} = props;
    className = (className != null)?className:"";
    leftWidthPrct = (props.leftWidthPrct != null)?props.leftWidthPrct:50;
    return (
        <div className={`line ${className}`} {...otherProps}>
            <div className={`line-left`}
                style={{
                    width : `${leftWidthPrct}%`
                }}>
                {left}
            </div>
            <div className={`line-right`}
                style={{
                    width : `${100 - leftWidthPrct}%`
                }}>
                {right}
            </div>
        </div>
    )
}
export default Line;