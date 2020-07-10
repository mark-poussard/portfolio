import React, { useState } from 'react';
import Header from '../components/text/Header';
import AboutBar from './AboutBar';
import './About.scss';
import AboutMe from './AboutMe';
import AboutCv from './AboutCv';
import StickyBottomDiv from '../components/structure/StickyBottomDiv';

const About : React.FC = props => {
    const [cv, setCv] = useState(false);
    return (
        <div className={`about`}>
            <Header>
            {{
                en : "About",
                fr : "A propos"
            }}
            </Header>
            <AboutBar cv={cv} setCv={setCv}/>
            <StickyBottomDiv className={`about-content`}>
                <AboutMe display={!cv} />
                <AboutCv display={cv} />
            </StickyBottomDiv>
        </div>
    )
}
export default About;