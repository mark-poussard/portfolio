import React from 'react';
import ProjectSubSection from '../ProjectSubSection';
import LocalDiv from '../../components/local/LocalDiv';
import './CorrectOpticGraphism.scss';

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
                            Le projet consistant à remplacer un site existant datée, l'accent à été placé sur le visuel et l'aspect graphique de la réalisation.
                        </p>
                        <p>
                            C'est pourquoi nous avons convenu d'un moment avec la propiétaire afin de passer en boutique prendre des photos et établir une identitée visuelle pour le magasin.
                        </p>
                        <p>
                            Un grand soin a été apporté a la réalisation des images et éléments graphiques diverse, tiré pour la majorité des photos prises en magasin.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Le projet consistant à remplacer un site existant datée, l'accent à été placé sur le visuel et l'aspect graphique de la réalisation.
                        </p>
                        <p>
                            C'est pourquoi nous avons convenu d'un moment avec la propiétaire afin de passer en boutique prendre des photos et établir une identitée visuelle pour le magasin.
                        </p>
                        <p>
                            Un grand soin a été apporté a la réalisation des images et éléments graphiques diverse, tiré pour la majorité des photos prises en magasin.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    )
}
export default CorrectOpticGraphism;