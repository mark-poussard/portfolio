import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';
import './ToetcieProjectMobile.scss';

const ToetcieProjectMobile : React.FC = props => {
    return (
        <div className={`toetcie-project-mobile`}>
            <div className={`toetcie-project-mobile-illustration`}>
                <ImageDiv src={`media/toetcie-mobile.png`} />
            </div>
            <div className={`toetcie-project-mobile-text`}>
                <h3 className={`toetcie-project-mobile-header`}>
                    <LocalDiv>
                    {{
                        en : "Mobile navigation",
                        fr : "Navigation mobile"
                    }}
                    </LocalDiv>
                </h3>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                Une étude du marché et des statistiques d'utilisation nous dévoile que plus de 75% des utilisateurs navigue sur le site web en utilisant des supports mobile.
                            </p>
                            <p>
                                Face à cette réalité il est absolument essentiel de proposer une solution réactive capable de s'adapter à divers support tout en gardant une lisibilité et une navigation impeccable, sans dégradation des fonctionnalitées du site web.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Une étude du marché et des statistiques d'utilisation nous dévoile que plus de 75% des utilisateurs navigue sur le site web en utilisant des supports mobile.
                            </p>
                            <p>
                                Face à cette réalité il est absolument essentiel de proposer une solution réactive capable de s'adapter à divers support tout en gardant une lisibilité et une navigation impeccable, sans dégradation des fonctionnalitées du site web.
                            </p>
                        </>
                }}
                </LocalDiv>
            </div>
            <div className={`toetcie-project-mobile-illustration mobile`}>
                <ImageDiv src={`media/toetcie-mobile.png`} />
            </div>
        </div>
    )
}
export default ToetcieProjectMobile;