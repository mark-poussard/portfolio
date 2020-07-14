import React from 'react';
import './Index.scss';
import Title from '../components/text/Title';
import Paragraph from '../components/text/Paragraph';
import Bubble from '../components/bubble/Bubble';
import AboutBubble from '../about/AboutBubble';
import ContactBubble from '../contact/ContactBubble';
import ProjectsBubble from '../projects/ProjectsBubble';
import LocalSelector from '../components/local/LocalSelector';
import Subtitle from '../components/text/Subtitle';

const Index : React.FC = props => {
    return (
        <div className={`index`}>
            <LocalSelector />
            <Title>Mark Poussard</Title>
            <Subtitle>
            {{
                en : "Full stack developer",
                fr : "Ingénieur informatique"
            }}
            </Subtitle>
            <AboutBubble />
            <ProjectsBubble />
            <ContactBubble />
        </div>
    )
}
export default Index;