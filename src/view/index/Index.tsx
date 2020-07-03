import React from 'react';
import './Index.scss';
import Title from '../components/text/Title';
import Paragraph from '../components/text/Paragraph';
import Bubble from '../components/bubble/Bubble';
import AboutBubble from '../about/AboutBubble';

const Index : React.FC = props => {
    return (
        <div className={`index`}>
            <Title>Mark Poussard</Title>
            <Paragraph>
            {{
                "en" : "",
                "fr" : ""
            }}
            </Paragraph>
            <AboutBubble />
        </div>
    )
}
export default Index;