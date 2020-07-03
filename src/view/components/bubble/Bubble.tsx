import React, { useState } from 'react';
import './Bubble.scss';

interface IBubbleProps{
    backgroundColor : string;
    top : number;
    left : number;
    bubbleContent : React.ReactNode;
}

const Bubble : React.FC<IBubbleProps> = props => {
    const [actif, setActif] = useState(false);
    const onBubbleClick = () => {
        setActif(true);
    }
    let circleRadius = 100;
    const circleLeft = props.left+circleRadius;
    const circleTop = props.top+circleRadius;
    const contentSize = circleRadius;
    if(actif){
        circleRadius = 3000
    }
    const actifClassName = (actif)?"actif":"";
    return (
        <div className={`bubble-wrapper ${actifClassName}`} style={{
            backgroundColor : props.backgroundColor,
            clipPath : `circle(${circleRadius}px at ${circleLeft}px ${circleTop}px )`
        }}>
            <div className={`bubble`} style={{
                top : `${props.top}px`,
                left : `${props.left}px`,
                width : `${contentSize*2}px`,
                height : `${contentSize*2}px`
            }} onClick={onBubbleClick}>
                {props.bubbleContent}
            </div>
            <div className={`expanded-content`}>
                {props.children}
            </div>
        </div>
    )
}
export default Bubble;