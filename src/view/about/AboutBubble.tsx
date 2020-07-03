import React from 'react';
import Bubble from '../components/bubble/Bubble';
import AboutBubbleContent from './AboutBubbleContent';
import About from './About';

const AboutBubble : React.FC = props => {
    return (
        <Bubble backgroundColor="var(--color-ming)" 
            top={200} 
            left={0}
            bubbleContent={<AboutBubbleContent/>}>
                <About />
        </Bubble>
    )
}
export default AboutBubble;