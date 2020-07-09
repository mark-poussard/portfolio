import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import ImageDiv from '../../components/media/ImageDiv';
import ProjectSubSection from '../ProjectSubSection';
import './ToetcieProjectIntro.scss';

const ToetcieProjectIntro : React.FC = props => {
    return (
        <ProjectSubSection className={`toetcie-project-intro`}
            illustration={
                <ImageDiv className={`toetcie-project-intro-illustration`} 
                    src={`media/toetcie-intro.jpg`} />
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            Tô & Cie est une cantine Vietnamienne proposant une cuisine authentique et familiale.
                            Dans le cadre de la digitalisation du restaurant, j'ai participé a la conception et a la réalisation d'un site web réactif, flexible, capable de commande en ligne.
                        </p>
                        <p>
                            Afin de m'assurer que le site présenterais au mieux l'esprit et l'atmosphére de la cantine, je me suis rendu sur place pour une discussion avec le restaurateur.
                            Au fil de cette discussion et au travers des divers échange, nous avons pu dégager l'essentiel, l'ADN de ce qui fait Tô & cie ainsi que les besoins principaux auxquel le site se devrait de répondre.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Tô & Cie est une cantine Vietnamienne proposant une cuisine authentique et familiale.
                            Dans le cadre de la digitalisation du restaurant, j'ai participé a la conception et a la réalisation d'un site web réactif, flexible, capable de commande en ligne.
                        </p>
                        <p>
                            Afin de m'assurer que le site présenterais au mieux l'esprit et l'atmosphére de la cantine, je me suis rendu sur place pour une discussion avec le restaurateur.
                            Au fil de cette discussion et au travers des divers échange, nous avons pu dégager l'essentiel, l'ADN de ce qui fait Tô & cie ainsi que les besoins principaux auxquel le site se devrait de répondre.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectIntro;