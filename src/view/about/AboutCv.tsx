import React from 'react';
import './AboutCv.scss';
import GoldmanSachs from './cv/GoldmanSachs';
import GBSmith from './cv/GBSmith';

interface IAboutCvProps{
    display : boolean;
}

const AboutCv : React.FC<IAboutCvProps> = props => {
    const hiddenClassName = (!props.display)?"hidden":"";
    return (
        <div className={`about-cv ${hiddenClassName}`}>
            <GoldmanSachs />
            <GBSmith />
        </div>
    )
}
export default AboutCv;