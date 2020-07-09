import React from 'react';
import './ToetcieProjectEditable.scss';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';
import ProjectSubSection from '../ProjectSubSection';

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
                <ImageDiv className={`toetcie-project-editable-illustration`} 
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
                            Doing so, allows the chef to edit his pricing, add items to his menu, or keep clients informed. All of which can be accomplished with minimal computer skills.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Dans l'objectif d'offrir un maximum de flexibilité au restaurateur, le site web a été entièrement pensé pour fonctionner à partir d'informations tirées de fichiers formattés.
                        </p>
                        <p>
                            Cette approche permet au restaurateur de changer les prix de sa carte, d'ajouter des éléments à son menu et d'informer ses clients, le tout avec de très faibles compétences en informatique.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    )
}
export default ToetcieProjectEditable;