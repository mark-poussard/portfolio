import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import ProjectSubSection from '../ProjectSubSection';
import Logo from './Logo';
import './ToetcieProjectGraphism.scss';
import Keyword from '../../components/text/Keyword';

const ToetcieProjectGraphism : React.FC = props => {
    return (
        <ProjectSubSection className={`toetcie-project-graphism`}
            header={
                <LocalDiv>
                {{
                    en : "Graphic design",
                    fr : "Graphisme"
                }}
                </LocalDiv>
            }
            illustration={
                <Logo className={`toetcie-project-graphism-illustration`} 
                    animate backgroundCircle/>
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            The website design and graphism are essential components to this project.
                            They structure a clients first impressions, and as such must <Keyword>perfectly convey the spirit</Keyword> and atmosphere of the restaurant.
                        </p>
                        <p>
                            To ensure that the website would stay as close to Tô & Cie's identity, I worked with numerous photos taken there.
                        </p>
                        <p>
                            I redrew Tô & Cie's logo to <Keyword>animate</Keyword> it, and various small graphical items on the website are directly inspired by pictures I took of the restaurant.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            La charte et le travail graphique sont des composantes essentielles à tout site web. 
                            Elles forment les premières impressions d'un client et se doivent de transmettre au mieux l'<Keyword>esprit du restaurant</Keyword>.
                        </p>
                        <p>
                            Afin de s'assurer que le site web resterait fidèle à l'univers établi par Tô & Cie, j'ai travaillé sur la base de nombreuses photos prises sur place.
                        </p>
                        <p>
                            Le logo a été redessiné afin d'en produire une <Keyword>version animée</Keyword> et de nombreux petits éléments graphiques ont été dessinés sur la base des photos prises au restaurant.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectGraphism;