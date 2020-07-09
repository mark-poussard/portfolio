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
                            Dans l'objectif d'offrir un maximum de flexibilité au restaurateur, le site web à été entiérement pensé pour fonctionner à partir d'informations tirées de fichiers formattés.
                        </p>
                        <p>
                            Cette approche permet au restaurateur de changer les prix de sa carte, ajouter des éléments à son menu et informer ses clients, le tout avec de trés faible compétence requise en informatique.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Dans l'objectif d'offrir un maximum de flexibilité au restaurateur, le site web à été entiérement pensé pour fonctionner à partir d'informations tirées de fichiers formattés.
                        </p>
                        <p>
                            Cette approche permet au restaurateur de changer les prix de sa carte, ajouter des éléments à son menu et informer ses clients, le tout avec de trés faible compétence requise en informatique.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    )
}
export default ToetcieProjectEditable;