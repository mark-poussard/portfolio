import React from 'react';
import './ToetcieProjectIntro.scss';
import LocalDiv from '../../components/local/LocalDiv';
import Logo from './Logo';
import ImageDiv from '../../components/media/ImageDiv';

const ToetcieProjectIntro : React.FC = props => {
    return (
        <div className={`toetcie-project-intro`}>
            <div className={`toetcie-project-intro-text`}>
                <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                Conception et réalisation d'un site web pour le restaurant Tô & cie.
                                Rencontre client pour la mise au point de la maquette et le détail des fonctionalitées attendues.
                                Prise de photos et de croquis afin de distiller l'ADN du restaurant.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Conception et réalisation d'un site web pour le restaurant Tô & cie.
                                Rencontre client pour la mise au point de la maquette et le détail des fonctionalitées attendues.
                                Prise de photos et de croquis afin de distiller l'ADN du restaurant.
                            </p>
                        </>
                }}
                </LocalDiv>
            </div>
            <div className={`toetcie-project-intro-illustration`}>
                <ImageDiv src={`media/toetcie-intro.jpg`} />
            </div>
        </div>
    )
}
export default ToetcieProjectIntro;