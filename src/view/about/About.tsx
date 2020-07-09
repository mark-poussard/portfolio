import React, { useState } from 'react';
import Header from '../components/text/Header';
import AboutBar from './AboutBar';
import './About.scss';
import AboutMe from './AboutMe';
import AboutCv from './AboutCv';

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
            <div className={`about-content`}>
                <div className={`about-absolute-catcher`}>
                    <AboutMe display={!cv} />
                    <AboutCv display={cv} />
                </div>
            </div>
        </div>
    )
}
export default About;