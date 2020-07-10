import React from 'react';
import CvEntry from './CvEntry';
import LocalDiv from '../../components/local/LocalDiv';
import './GoldmanSachs.scss';

const GoldmanSachs : React.FC = props => {
    return (
        <CvEntry className={`goldman-sachs`}
                date={`2019`}
                location={`London`}
                illustration={
                    <img className={`goldman-sachs-illustration`} src={`media/gs.svg`}/>
                }
                title={`Goldman Sachs`}>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                Associate at Goldman Sachs in the Technology divison. 
                                I worked with my team on an internal web app handling Corporate Actions detection and resolution for the whole of the company's and its client's positions.
                            </p>
                            <p>
                                The stack was designed with an angular frontend and a java backend, with some slang (the proprietary Goldman Sachs language) scripts for legacy systems interoperability.
                                The app was designed with a focus on micro-services and scalability to ensure a timely resolution of Corporate Actions.
                            </p>
                        </>,
                    fr : 
                        <p>
                            Je me lance, depuis le début de l'année, dans un service de création de site ou d'applications internet.
                        </p>
                }}
                </LocalDiv>
            </CvEntry>
    )
}
export default GoldmanSachs;