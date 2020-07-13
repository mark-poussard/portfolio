import React from 'react';
import CvEntry from './CvEntry';
import LocalDiv from '../../components/local/LocalDiv';
import './GoldmanSachs.scss';

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
                                The stack was designed with an angular frontend and a java backend, with some slang (proprietary Goldman Sachs language) scripts for legacy systems interoperability.
                                The app was designed with a focus on micro-services and scalability to ensure a timely resolution of Corporate Actions.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Grade d'associé au sein de la division technologique de Goldman Sachs.
                                J'ai travaillé sur une application web interne pour la détéction et la résolution des opérations sur titre sur l'ensemble des positions de la companie et de ses clients.
                            </p>
                            <p>
                                La pile technologique est constituée d'angular sur le frontal et de java en arrière, avec quelques scripts slang (language propriétaire de Goldman Sachs) pour la communications avec les systèmes hérités.
                                L'application a été conçue avec un accent sur les microservices et la scalabilitée des systémes pour s'assurer d'une résolution ponctuelle des opérations sur titres.
                            </p>
                        </>
                }}
                </LocalDiv>
            </CvEntry>
    )
}
export default GoldmanSachs;