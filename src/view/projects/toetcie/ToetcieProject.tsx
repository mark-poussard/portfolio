import React from 'react';
import ProjectSection from '../ProjectSection';
import ImageDiv from '../../components/media/ImageDiv';
import VideoDiv from '../../components/media/VideoDiv';
import './ToetcieProject.scss';

const ToetcieProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`toetcie-project`}
            name={`To & Cie`}
            // media1="media/toetcie-thumbnail.png"
            // media2="media/toetcie-demo.mp4"
            // media3=""
            separator=""
            media={
                <div className={`toetcie-media`}>
                    <div className={`toetcie-media-columns`}>
                        <ImageDiv src={`media/toetcie-mobile.png`} />
                        <ImageDiv src={`media/toetcie-thumbnail.png`} />
                        <ImageDiv src={`media/toetcie-thumbnail.png`} />
                    </div>
                    <div className={`toetcie-media-footer`}>
                        <VideoDiv src={`media/toetcie-demo.mp4`} />
                    </div>
                </div>
            }>
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
        </ProjectSection>
    )
}
export default ToetcieProject;