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
        <div className={`about-me`}>
            <img className={`about-me-picture ${hiddenClassName}`} src={`media/moi.jpeg`}/>
            <div className={`about-me-text ${hiddenClassName}`}>
                <Quote author={`Leonard Da Vinci`}>
                    <LocalDiv>
                    {{
                        en : "Lorem ipsum",
                        fr : "Lorem ipsum"
                    }}
                    </LocalDiv>
                </Quote>
                <LocalDiv>
                {{
                    en : "Hi, I'm Mark a French full stack developer. I used to work in the City of London ",
                    fr : "Lorem ipsum"
                }}
                </LocalDiv>
            </div>
        </div>
    )
}
export default AboutMe;