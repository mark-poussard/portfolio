import React from 'react';
import Bubble, { DEFAULT_BUBBLE_RADIUS } from '../components/bubble/Bubble';
import { isMobile } from '../hooks/UseMediaQuery';
import { useViewportHeight, useViewportWidth } from '../hooks/UseViewport';
import Contact from './Contact';
import ContactBubbleContent from './ContactBubbleContent';

const ContactBubble : React.FC = props => {
    const vh = useViewportHeight();
    const vw = useViewportWidth();
    const mobile = isMobile();
    const minDim = (vw > vh*0.5)?vh*0.5:vw;
    const bubbleRadius = (mobile)?(minDim*0.25):DEFAULT_BUBBLE_RADIUS;
    return (
        <Bubble backgroundColor="var(--color-slate)" 
            top={(mobile)?(vh*0.5+(bubbleRadius*2)):(vh * 0.7 - bubbleRadius)} 
            left={(mobile)?(vw*0.5 - bubbleRadius):(vw*0.5 - bubbleRadius)}
            bubbleContent={<ContactBubbleContent/>}
            bubbleRadius={bubbleRadius}>
                <Contact />
        </Bubble>
    )
}
export default ContactBubble;