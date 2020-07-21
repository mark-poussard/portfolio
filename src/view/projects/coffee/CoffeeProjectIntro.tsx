import React from 'react';
import ProjectSubSection from '../ProjectSubSection';
import './CoffeeProjectIntro.scss';
import LocalDiv from '../../components/local/LocalDiv';
import Keyword from '../../components/text/Keyword';

const CoffeeProjectIntro : React.FC = props => {
    return (
        <ProjectSubSection className={`coffee-project-intro`}
            illustration={
                <img className={`coffee-project-intro-illustration`} 
                    src={`media/coffee-intro.jpg`} />
            }
            left>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            'Coffee' is a proof-of-concept aimed at showcasing an <Keyword>editable restaurant website</Keyword>.
                        </p>
                        <p>
                            This website is divided in two parts, the client facing part and the secure administrator part that allows for the editing of text and menu items.
                        </p>
                        <p>
                            This editing feature is built exclusively off the client navigator and an Amazon file repository, <Keyword>no database or server are required</Keyword>, which cuts down significantly on cost.
                        </p>
                        <p>
                            Administrator credentials are given out on request to potential customers for them to try out the technology.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            'Coffee' est une démonstration de faisabilité d'un <Keyword>site web de restaurateur éditable</Keyword>.
                        </p>
                        <p>
                            Le site web est composé de deux parties, une partie client et une partie administrateur protégée qui permet l'édition du contenu du site.
                        </p>
                        <p>
                            Toute la procédure d'édition se fait exclusivement à partir du navigateur et d'un dépôt de contenu Amazon, ne nécessitant <Keyword>pas de base de données ou de serveur</Keyword> couteux.
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
export default CoffeeProjectIntro;