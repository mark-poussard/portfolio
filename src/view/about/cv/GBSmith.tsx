import React from 'react';
import CvEntry from './CvEntry';
import './GBSmith.scss';
import LocalDiv from '../../components/local/LocalDiv';
import Keyword from '../../components/text/Keyword';

const GBSmith : React.FC = props => {
    return (
        <CvEntry className={`gb-smith`}
                date={`2016 - 2018`}
                location={
                <LocalDiv>
                {{
                    en : "London",
                    fr : "Londres"
                }}
                </LocalDiv>
                }
                illustration={
                    <a href={`https://gbandsmith.com/`} target={`_blank`}>
                        <img className={`gb-smith-illustration`} src={`media/gb-smith.png`}/>
                    </a>
                }
                title={`GB & SMITH`}>
            <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                As a GB & SMITH research & development software engineer, I worked closely with a <Keyword>global team</Keyword> to define and create new web applications for the company's clients.
                            </p>
                            <p>
                                Within an <Keyword>agile</Keyword> framework, we worked on a 2 week long sprint basis to deliver iterations of the new software we built.
                            </p>
                            <p>
                                The stacks and technologies I worked with were very diverse as they span several products, but most noticeably I coded in <Keyword>Javascript</Keyword>, <Keyword>React</Keyword>, <Keyword>Java</Keyword> and <Keyword>C#</Keyword>.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                En tant qu'ingénieur recherche et développement à GB & SMITH, j'ai travaillé au sein d'une <Keyword>équipe internationale</Keyword> afin d'imaginer et de créer de nouvelles applications web pour la clientèle de l'entreprise.
                            </p>
                            <p>
                                Je délivrais les itérations de nouveaux logiciels dans une structure de travail <Keyword>agile</Keyword> articulé autour de sprints de 2 semaines.
                            </p>
                            <p>
                                J'ai pu toucher à de nombreuses technologies à travers mon travail sur les différents produits de l'entreprise, les plus importantes étant les languages <Keyword>Javascript</Keyword>, <Keyword>React</Keyword>, <Keyword>Java</Keyword> et <Keyword>C#</Keyword>.
                            </p>
                        </>
                }}
            </LocalDiv>
        </CvEntry>
    )
}
export default GBSmith;