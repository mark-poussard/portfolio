import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';
import './ToetcieProjectMobile.scss';
import ProjectSubSection from '../ProjectSubSection';

const ToetcieProjectMobile : React.FC = props => {
    return (
        <ProjectSubSection className={`toetcie-project-mobile`}
        header={
            <LocalDiv>
            {{
                en : "Mobile navigation",
                fr : "Navigation mobile"
            }}
            </LocalDiv>
        }
        illustration={
            <ImageDiv className={`toetcie-project-mobile-illustration`}  
                src={`media/toetcie-mobile.png`} />
        }
        left>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            The statistics showed us that 75% of users accessed the existing website via mobile.
                        </p>
                        <p>
                            With that information in mind, it was crucial for our solution to be responsive and adapted to mobile supports, while being as easy to use and navigate as on a computer and keeping all the website's features.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Une étude du marché et des statistiques d'utilisation nous dévoile que plus de 75% des utilisateurs naviguent sur le site web en utilisant des supports mobiles.
                        </p>
                        <p>
                            Face à cette réalité, il est absolument essentiel de proposer une solution réactive capable de s'adapter à divers supports tout en gardant une lisibilité et une navigation impeccable, sans dégradation des fonctionnalitées du site web.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectMobile;