import React from 'react';
import './ArrowButton.scss';
import DoubleCaret from '../svg/DoubleCaret';

interface IArrowButtonProps{
    text : string;
    left ?: boolean;
    right ?: boolean;
}

const ArrowButton : React.FC<IArrowButtonProps> = props => {
    return (
        <button className={`arrow-button`}>
            <DoubleCaret left={props.left} right={props.right}/>
            <p className={`button-description`}>{props.text}</p>
        </button>
    )
}
export default ArrowButton;