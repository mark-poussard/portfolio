import React from 'react';
import './ToetcieProjectEditable.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ProjectSubSection from '../ProjectSubSection';
import Keyword from '../../components/text/Keyword';

const ToetcieProjectEditable : React.FC = props => {
    return (
        <ProjectSubSection className={`toetcie-project-editable`}
            header={
                <LocalDiv>
                {{
                    en : "Editable content",
                    fr : "Contenu éditable"
                }}
                </LocalDiv>
            }
            illustration={
                <img className={`toetcie-project-editable-illustration`} 
                    src={`media/toetcie-editable.png`} />
            }
            left>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            To maximise flexibility on the chef's side, the website was designed to gather all its information from pre-formatted files.
                        </p>
                        <p>
                            Doing so, allows the chef to <Keyword>edit his pricing</Keyword>, <Keyword>add items to his menu</Keyword>, or <Keyword>keep clients informed</Keyword>. All of which can be accomplished with <Keyword>minimal computer skills</Keyword>.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Dans l'objectif d'offrir un maximum de flexibilité au restaurateur, le site web a été entièrement pensé pour fonctionner à partir d'informations tirées de fichiers formattés.
                        </p>
                        <p>
                            Cette approche permet au restaurateur d'<Keyword>ajuster les prix de sa carte</Keyword>, d'<Keyword>ajouter des éléments à son menu</Keyword> et d'<Keyword>informer ses clients</Keyword>, le tout avec de <Keyword>très faibles compétences en informatique requises</Keyword>.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    )
}
export default ToetcieProjectEditable;