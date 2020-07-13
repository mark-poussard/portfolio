import React from 'react';
import './AboutCv.scss';
import GoldmanSachs from './cv/GoldmanSachs';
import GBSmith from './cv/GBSmith';
import Enseirb from './cv/Enseirb';
import Keio from './cv/Keio';

interface IAboutCvProps{
    display : boolean;
}

const AboutCv : React.FC<IAboutCvProps> = props => {
    const hiddenClassName = (!props.display)?"hidden":"";
    return (
        <div className={`about-cv ${hiddenClassName}`}>
            <GoldmanSachs />
            <GBSmith />
            <Keio />
            <Enseirb />
        </div>
    )
}
export default AboutCv;