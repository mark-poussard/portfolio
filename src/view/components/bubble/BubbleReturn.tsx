import React from 'react';
import Return from '../svg/Return';
import './BubbleReturn.scss';

interface IBubbleReturnProps{
    onClick : () => void;
}

const BubbleReturn : React.FC<IBubbleReturnProps> = props => {
    return (
        <Return className={`bubble-return`} onClick={props.onClick}/>
    )
}
export default BubbleReturn;