import React from 'react';
import CvEntry from './CvEntry';
import './GBSmith.scss';
import LocalDiv from '../../components/local/LocalDiv';

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
                    <img className={`gb-smith-illustration`} src={`media/gb-smith.png`}/>
                }
                title={`GB & SMITH`}>
            <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                As a GB & SMITH research & development software engineer, I worked closely with a global team to define and create new web applications for the company's clients.
                            </p>
                            <p>
                                Within an Agile framework we worked on a 2 week long sprint basis to deliver iterations on the new software we built.
                            </p>
                            <p>
                                The stacks and technologies I worked with were very diverse as they span several products, but most noticeably I coded in Javascript, React, Java and C#.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                En tant qu'ingénieur recherche et dévelopement à GB & SMITH, j'ai travaillé au sein d'une équipe international afin d'imaginer et de créer de nouvelles applications web pour la clientèle de l'entreprise.
                            </p>
                            <p>
                                Je délivrai les itérations de nouveaux logiciels dans une structure de travail agile articulé autour de sprint de 2 semaines.
                            </p>
                            <p>
                                J'ai pu toucher à de nombreuses technologies à travers mon travail sur les différents produits de l'entreprise, les plus importantes étant les languages Javascript, React, Java et C#.
                            </p>
                        </>
                }}
            </LocalDiv>
        </CvEntry>
    )
}
export default GBSmith;