import React from 'react';
import LocalDiv from '../components/local/LocalDiv';
import './AboutMe.scss';
import Quote from './Quote';

interface IAboutMeProps{
    display : boolean;
}

const AboutMe : React.FC<IAboutMeProps> = props => {
    const hiddenClassName = (!props.display)?"hidden":"";
    return (
        <div className={`about-me ${hiddenClassName}`}>
            <img className={`about-me-picture ${hiddenClassName}`} src={`media/moi.jpeg`}/>
            <div className={`about-me-text ${hiddenClassName}`}>
                <Quote author={`Antoine de Saint-Exupéry`}>
                    <LocalDiv>
                    {{
                        en : "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
                        fr : "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer."
                    }}
                    </LocalDiv>
                </Quote>
                <LocalDiv>
                {{
                    en : 
                        <p>
                            Hi I'm Mark, a French full stack developer. 
                            I'm currently working as a remote freelancer, designing and creating beautiful websites for businesses and restaurants as I travel.
                            I've lived in London, studied in Tokyo and honed my web skills in Paris.
                            I'm an avid reader of fantasy and science-fiction, love running, do rock climbing, brazillian jiu-jitsu and ping-pong.
                        </p>,
                    fr : "Lorem ipsum"
                }}
                </LocalDiv>
            </div>
        </div>
    )
}
export default AboutMe;