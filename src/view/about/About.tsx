import React from 'react';
import Header from '../components/text/Header';

const About : React.FC = props => {
    return (
        <div className={`about`}>
            <Header>
            {{
                en : "About",
                fr : "A propos"
            }}
            </Header>
        </div>
    )
}
export default About;