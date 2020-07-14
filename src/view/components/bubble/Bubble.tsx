import React, { useState } from 'react';
import './Bubble.scss';
import { useViewportHeight, useViewportWidth } from '../../hooks/UseViewport';
import BubbleReturn from './BubbleReturn';

export interface IBubblePageProps{
    display : boolean;
}

interface IBubbleProps{
    backgroundColor : string;
    top : number;
    left : number;
    bubbleContent : React.ReactNode;
    bubbleRadius : number;
    Page : React.FC<IBubblePageProps>;
}

export const DEFAULT_BUBBLE_RADIUS = 100;

const Bubble : React.FC<IBubbleProps> = props => {
    const vh = useViewportHeight();
    const vw = useViewportWidth();
    // animation states
    const [hover, setHover] = useState(false);
    const [foreground, setForeground] = useState(false);
    const [fillScreen, setFillScreen] = useState(false);
    const [displayPage, setDisplayPage] = useState(false);
    // ------
    const onBubbleClick = () => {
        setForeground(true);
        setFillScreen(true);
        setTimeout(() => setDisplayPage(true), 1000);
    }
    const onBack = () => {
        setDisplayPage(false);
        setTimeout(() => {
            setFillScreen(false);
            setTimeout(() => {
                setForeground(false);
            }, 500);
        }, 500);
    }
    let circleRadius = props.bubbleRadius;
    const circleLeft = props.left+circleRadius;
    const circleTop = props.top+circleRadius;
    const contentSize = circleRadius;
    if(hover){
        circleRadius += 10;
    }
    if(fillScreen){
        circleRadius = (vh>vw)?vh:vw;
    }
    return (
        <div className={`bubble-wrapper`} style={{
            backgroundColor : props.backgroundColor,
            clipPath : `circle(${circleRadius}px at ${circleLeft}px ${circleTop}px )`,
            WebkitClipPath : `circle(${circleRadius}px at ${circleLeft}px ${circleTop}px )`,
            transition: (fillScreen)?`clip-path 1s, -webkit-clip-path 1s`:`clip-path 0.5s, -webkit-clip-path 0.5s`,
            zIndex: (foreground)?1:undefined,
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}>
            <div className={`bubble`} style={{
                top : `${props.top}px`,
                left : `${props.left}px`,
                width : `${contentSize*2}px`,
                height : `${contentSize*2}px`,
                visibility: (fillScreen)?"hidden":"visible",
                opacity: (fillScreen)?0:1,
            }} onClick={onBubbleClick}>
                <div className={`bubble-content`}>
                    {props.bubbleContent}
                </div>
            </div>
            <div className={`expanded-content`} style={{
                opacity: (displayPage)?1:0,
                visibility: (fillScreen)?"visible":"hidden"
            }}>
                <BubbleReturn onClick={onBack} />
                <div className={`expanded-content-page`} style={{
                    top: (displayPage)?"0px":"10px"
                }}>
                    <props.Page display={displayPage} />
                </div>
            </div>
        </div>
    )
}
export default Bubble;