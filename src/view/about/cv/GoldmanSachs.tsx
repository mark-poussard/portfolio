import React from 'react';
import CvEntry from './CvEntry';
import LocalDiv from '../../components/local/LocalDiv';
import './GoldmanSachs.scss';
import Keyword from '../../components/text/Keyword';

const GoldmanSachs : React.FC = props => {
    return (
        <CvEntry className={`goldman-sachs`}
                date={`2019`}
                location={
                <LocalDiv>
                {{
                    en : "London",
                    fr : "Londres"
                }}
                </LocalDiv>
                }
                illustration={
                    <a href={`https://www.goldmansachs.com/`} target={`_blank`}>
                        <img className={`goldman-sachs-illustration`} src={`media/gs.svg`}/>
                    </a>
                }
                title={`Goldman Sachs`}>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                As an associate at Goldman Sachs' technology division, 
                                I worked on an internal web app handling <Keyword>Corporate Actions</Keyword> detection and resolution for the whole of the company's and its client's positions.
                            </p>
                            <p>
                                The stack was designed with an <Keyword>Angular</Keyword> front end and a <Keyword>Java</Keyword> backend, with some <Keyword>Slang</Keyword> (proprietary Goldman Sachs language) scripts for legacy systems interoperability.
                                The app was designed with a focus on <Keyword>micro-services</Keyword> and <Keyword>scalability</Keyword> to ensure a timely resolution of Corporate Actions.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                En tant qu'associé au sein de la division technologique de Goldman Sachs,
                                j'ai travaillé sur une application web interne pour la détection et la résolution des <Keyword>opérations sur titre</Keyword> sur l'ensemble des positions de la compagnie et de ses clients.
                            </p>
                            <p>
                                La pile technologique est constituée d'<Keyword>angular</Keyword> sur le frontal et de <Keyword>java</Keyword> en arrière, avec quelques scripts <Keyword>slang</Keyword> (language propriétaire de Goldman Sachs) pour la communication avec les systèmes hérités.
                                L'application a été conçue avec un accent sur les <Keyword>microservices</Keyword> et la <Keyword>scalabilité</Keyword> des systèmes pour s'assurer d'une résolution ponctuelle des opérations sur titres.
                            </p>
                        </>
                }}
                </LocalDiv>
            </CvEntry>
    )
}
export default GoldmanSachs;