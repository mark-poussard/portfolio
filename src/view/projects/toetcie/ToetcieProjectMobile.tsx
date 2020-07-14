import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import './ToetcieProjectMobile.scss';
import ProjectSubSection from '../ProjectSubSection';
import Keyword from '../../components/text/Keyword';

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
            <img className={`toetcie-project-mobile-illustration`}  
                src={`media/toetcie-mobile.png`} />
        }
        left>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            Statistics show that <Keyword>75%</Keyword> of users access the existing website via <Keyword>mobile devices</Keyword>.
                        </p>
                        <p>
                            With that information in mind, it was crucial for our solution to be <Keyword>responsive and adapted to mobile</Keyword>, while being as easy to use and navigate as on a computer and keeping all of the website's features.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Une étude du marché et des statistiques d'utilisation nous dévoile que plus de <Keyword>75%</Keyword> des utilisateurs naviguent sur le site web en utilisant des <Keyword>supports mobiles</Keyword>.
                        </p>
                        <p>
                            Face à cette réalité, il est absolument essentiel de proposer une <Keyword>solution réactive</Keyword> capable de s'adapter à divers supports tout en gardant une lisibilité et une navigation impeccable, sans dégradation des fonctionnalités du site web.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectMobile;