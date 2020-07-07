import React from 'react';
import ProjectSection from '../ProjectSection';
import ImageDiv from '../../components/media/ImageDiv';
import VideoDiv from '../../components/media/VideoDiv';
import './ToetcieProject.scss';
import LocalDiv from '../../components/local/LocalDiv';

const ToetcieProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`toetcie-project`}
            name={`To & Cie`}>
            <div className={`toetcie-project-content`}>
                <div className={`toetcie-project-intro`}>
                    <LocalDiv>
                    {{
                        en : 
                            <>
                                <p>
                                    Conception et réalisation d'un site web pour le restaurant Tô & cie.
                                    Rencontre client pour la mise au point de la maquette et le détail des fonctionalitées attendues.
                                    Prise de photos et de croquis afin de distiller l'ADN du restaurant.
                                </p>
                                <p>Fonctionalitées :</p>
                                <ul>
                                    <li>Animation du logo et réalisations graphique diverses</li>
                                    <li>Menu en ligne éditable</li>
                                    <li>Commande en ligne par e-mail avec confirmation client</li>
                                    <li>Compatibilité navigation mobile</li>
                                </ul>
                            </>,
                        fr : 
                            <>
                                <p>
                                    Conception et réalisation d'un site web pour le restaurant Tô & cie.
                                    Rencontre client pour la mise au point de la maquette et le détail des fonctionalitées attendues.
                                    Prise de photos et de croquis afin de distiller l'ADN du restaurant.
                                </p>
                                <p>Fonctionalitées :</p>
                                <ul>
                                    <li>Animation du logo et réalisations graphique diverses</li>
                                    <li>Menu en ligne éditable</li>
                                    <li>Commande en ligne par e-mail avec confirmation client</li>
                                    <li>Compatibilité navigation mobile</li>
                                </ul>
                            </>
                    }}
                    </LocalDiv>
                </div>
                <ImageDiv className={`toetcie-project-intro-illustration`} src={`media/toetcie-thumbnail.png`} />
            </div>
        </ProjectSection>
    )
}
export default ToetcieProject;