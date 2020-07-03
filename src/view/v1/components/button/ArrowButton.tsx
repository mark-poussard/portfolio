import React from 'react';
import './ArrowButton.scss';
import DoubleCaret from '../svg/DoubleCaret';

interface IArrowButtonProps{
    text : string;
    onClick : () => void;
    left ?: boolean;
    right ?: boolean;
}

const ArrowButton : React.FC<IArrowButtonProps> = props => {
    const directionClassName = (props.left === true)?"left":"right";
    return (
        <button className={`arrow-button`} onClick={props.onClick}>
            <DoubleCaret left={props.left} right={props.right}/>
            <p className={`button-description ${directionClassName}`}>{props.text}</p>
        </button>
    )
}
export default ArrowButton;