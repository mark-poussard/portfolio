import React from 'react';
import './AboutBar.scss';
import CvToggleButton from './CvToggleButton';
import LinkedinLink from './links/LinkedinLink';
import GithubLink from './links/GithubLink';
import EmailLink from './links/EmailLink';

interface IAboutBarProps{
    cv : boolean;
    setCv : (cv : boolean) => void;
}

const AboutBar : React.FC<IAboutBarProps> = props => {
    return (
        <div className={`about-bar`}>
            <CvToggleButton cv={props.cv} setCv={props.setCv}/>
            <div className={`about-bar-links`}>
                <LinkedinLink />
                <GithubLink />
                <EmailLink />
            </div>
        </div>
    )
}
export default AboutBar;