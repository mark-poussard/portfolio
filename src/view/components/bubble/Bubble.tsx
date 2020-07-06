import React, { useState } from 'react';
import './Bubble.scss';
import { useViewportHeight, useViewportWidth } from '../../hooks/UseViewport';
import BubbleReturn from './BubbleReturn';

interface IBubbleProps{
    backgroundColor : string;
    top : number;
    left : number;
    bubbleContent : React.ReactNode;
    bubbleRadius : number;
}

export const DEFAULT_BUBBLE_RADIUS = 100;

const Bubble : React.FC<IBubbleProps> = props => {
    const vh = useViewportHeight();
    const vw = useViewportWidth();
    const [hover, setHover] = useState(false);
    const [actif, setActif] = useState(false);
    const onBubbleClick = () => {
        setActif(true);
    }
    const onBack = () => {
        setActif(false);
    }
    let circleRadius = props.bubbleRadius;
    const circleLeft = props.left+circleRadius;
    const circleTop = props.top+circleRadius;
    const contentSize = circleRadius;
    if(hover){
        circleRadius += 10;
    }
    if(actif){
        circleRadius = (vh>vw)?vh:vw;
    }
    const actifClassName = (actif)?"actif":"";
    return (
        <div className={`bubble-wrapper ${actifClassName}`} style={{
            backgroundColor : props.backgroundColor,
            clipPath : `circle(${circleRadius}px at ${circleLeft}px ${circleTop}px )`,
            transition: (actif)?`clip-path 1s`:`clip-path 0.5s`,
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}>
            <div className={`bubble`} style={{
                top : `${props.top}px`,
                left : `${props.left}px`,
                width : `${contentSize*2}px`,
                height : `${contentSize*2}px`
            }} onClick={onBubbleClick}>
                <div className={`bubble-content`}>
                    {props.bubbleContent}
                </div>
            </div>
            <div className={`expanded-content`}>
                <BubbleReturn onClick={onBack} />
                {props.children}
            </div>
        </div>
    )
}
export default Bubble;