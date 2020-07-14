import React from 'react';
import ProjectSubSection from '../ProjectSubSection';
import LocalDiv from '../../components/local/LocalDiv';
import './CorrectOpticGraphism.scss';
import Keyword from '../../components/text/Keyword';

const CorrectOpticGraphism : React.FC = props => {
    return (
        <ProjectSubSection className={`correct-optic-project-graphism`}
        header={
            <LocalDiv>
            {{
                en : "Graphic design",
                fr : "Graphisme"
            }}
            </LocalDiv>
        }
        illustration={
            <img className={`correct-optic-project-graphism-illustration`} 
                src={`media/correct-optic-graphism.png`}/>
        }
        left>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            As we were replacing an older existing website, graphical design was of the upmost importance on this project.
                        </p>
                        <p>
                            To make sure we'd hit the mark, we arranged an on-site meeting with the owner so we could discuss the store's <Keyword>identity and atmosphere</Keyword>, and take reference pictures.
                        </p>
                        <p>
                            I worked with great care on styling the website with the help of the pictures taken in store. Most of the graphical elements are actually directly taken from those photographs.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Le projet consistant à remplacer un site existant datée, l'accent a été placé sur le visuel et l'aspect graphique de la réalisation.
                        </p>
                        <p>
                            C'est pourquoi nous avons convenu d'un moment avec la propiétaire afin de passer en boutique prendre des photos et établir une <Keyword>identitée visuelle</Keyword> pour le magasin.
                        </p>
                        <p>
                            Un grand soin a été apporté a la <Keyword>réalisation des images et éléments graphiques</Keyword> diverses, tirés pour la majorité des photos prises en magasin.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    )
}
export default CorrectOpticGraphism;