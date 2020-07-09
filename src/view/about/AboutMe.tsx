import React from 'react';
import './AboutMe.scss';
import LocalDiv from '../components/local/LocalDiv';

interface IAboutMeProps{
    display : boolean;
}

const AboutMe : React.FC<IAboutMeProps> = props => {
    return (
        <div className={`about-me`}>
            <img className={`about-me-picture`} src={`media/moi.jpeg`} />
            <div className={`about-me-text`}>
                <LocalDiv>
                {{
                    en : "Lorem ipsum",
                    fr : "Lorem ipsum"
                }}
                </LocalDiv>
            </div>
        </div>
    )
}
export default AboutMe;