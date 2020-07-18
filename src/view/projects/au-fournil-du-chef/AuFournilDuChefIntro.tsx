import React from 'react';
import ProjectSubSection from '../ProjectSubSection';
import './AuFournilDuChefIntro.scss';
import LocalDiv from '../../components/local/LocalDiv';

const AuFournilDuChefIntro : React.FC = props => {
    return (
        <ProjectSubSection className={`au-fournil-du-chef-project-intro`}
            illustration={
                <img className={`au-fournil-du-chef-project-intro-illustration`} 
                    src={`media/au-fournil-du-chef-intro.jpg`} />
            }
            left>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            'Au fournil du chef' is a proof-of-concept aimed at showcasing a restaurant website with editing capabilities.
                        </p>
                        <p>
                            This website is divided in two parts, the client facing part and the secure administrator part that allows for the editing of text and menu items.
                        </p>
                        <p>
                            This editing feature is built exclusively off the client navigator and an Amazon file repository, no database or server are required, which cuts down significantly on cost.
                        </p>
                        <p>
                            Administrator credentials are given out on request to potential customers for them to try out the technology.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            'Au fournil du chef' est une démonstration de faisabilité d'un site web de restaurateur éditable.
                        </p>
                        <p>
                            Le site web est composé de deux parties, une partie client et une partie administrateur protégée qui permet l'édition du contenu du site.
                        </p>
                        <p>
                            Toute la procédure d'édition se fait exclusivement à partir du navigateur et d'un dépôt de contenu Amazon, ne nécessitant pas de base de données ou de serveur couteux.
                        </p>
                        <p>
                            L'accès administrateur est distribué sur demande aux clients potentiel pour leur permettre d'expérimenter eux-mêmes avec cette solution.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    )
}
export default AuFournilDuChefIntro;