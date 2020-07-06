import React from 'react';
import './Index.scss';
import Title from '../components/text/Title';
import Paragraph from '../components/text/Paragraph';
import Bubble from '../components/bubble/Bubble';
import AboutBubble from '../about/AboutBubble';
import ContactBubble from '../contact/ContactBubble';
import ProjectsBubble from '../projects/ProjectsBubble';
import LocalSelector from '../components/local/LocalSelector';

const Index : React.FC = props => {
    return (
        <div className={`index`}>
            <LocalSelector />
            <Title>Mark Poussard</Title>
            <Paragraph>
            {{
                "en" : "",
                "fr" : ""
            }}
            </Paragraph>
            <AboutBubble />
            <ContactBubble />
            <ProjectsBubble />
        </div>
    )
}
export default Index;