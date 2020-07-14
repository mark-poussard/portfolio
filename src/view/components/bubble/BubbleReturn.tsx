import React from 'react';
import Return from '../svg/Return';
import './BubbleReturn.scss';

interface IBubbleReturnProps{
    onClick : () => void;
    backgroundColor ?: string;
}

const BubbleReturn : React.FC<IBubbleReturnProps> = props => {
    return (
        <Return className={`bubble-return`} backgroundColor={props.backgroundColor} onClick={props.onClick}/>
    )
}
export default BubbleReturn;