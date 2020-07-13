import React from 'react';
import Bubble, { DEFAULT_BUBBLE_RADIUS } from '../components/bubble/Bubble';
import AboutBubbleContent from './AboutBubbleContent';
import About from './About';
import { useViewportHeight, useViewportWidth } from '../hooks/UseViewport';
import { isMobile } from '../hooks/UseMediaQuery';

const AboutBubble : React.FC = props => {
    const vh = useViewportHeight();
    const vw = useViewportWidth();
    const mobile = isMobile();
    const minDim = (vw > vh*0.5)?vh*0.5:vw;
    const bubbleRadius = (mobile)?(minDim*0.25):DEFAULT_BUBBLE_RADIUS;
    return (
        <Bubble backgroundColor="var(--color-ming)" 
            top={(mobile)?(vh*0.5):(vh * 0.6 - bubbleRadius)} 
            left={(mobile)?(vw*0.25-bubbleRadius):(vw*0.1)}
            bubbleContent={<AboutBubbleContent/>}
            bubbleRadius={bubbleRadius}
            Page={About} />
    )
}
export default AboutBubble;