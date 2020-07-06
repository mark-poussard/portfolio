import React from 'react';
import Bubble, { DEFAULT_BUBBLE_RADIUS } from '../components/bubble/Bubble';
import { isMobile } from '../hooks/UseMediaQuery';
import { useViewportHeight, useViewportWidth } from '../hooks/UseViewport';
import Contact from './Projects';
import ProjectsBubbleContent from './ProjectsBubbleContent';

const ProjectsBubble : React.FC = props => {
    const vh = useViewportHeight();
    const vw = useViewportWidth();
    const mobile = isMobile();
    const minDim = (vw > vh*0.5)?vh*0.5:vw;
    const bubbleRadius = (mobile)?(minDim*0.25):DEFAULT_BUBBLE_RADIUS;
    return (
        <Bubble backgroundColor="var(--color-indigo)" 
            top={(mobile)?(vh*0.5):(vh * 0.6 - bubbleRadius)} 
            left={(mobile)?(vw*0.75-bubbleRadius):((vw*0.9) - (2*bubbleRadius))}
            bubbleContent={<ProjectsBubbleContent/>}
            bubbleRadius={bubbleRadius}>
                <Contact />
        </Bubble>
    )
}
export default ProjectsBubble;