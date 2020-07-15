import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import ProjectSubSection from '../ProjectSubSection';
import './ToetcieProjectIntro.scss';
import ParallaxDivScroller from '../../components/parallax/ParallaxDivScroller';
import Keyword from '../../components/text/Keyword';

interface IToetcieProjectIntroProps{
    projectsRef : HTMLDivElement;
}

const ToetcieProjectIntro : React.FC<IToetcieProjectIntroProps> = props => {
    return (
        <ProjectSubSection className={`toetcie-project-intro`}
            illustration={
                <div className={`toetcie-project-intro-illustration-wrapper`}>
                    <img className={`toetcie-project-intro-illustration`} 
                        src={`media/toetcie-intro.jpg`} />
                </div>
                // <ParallaxDivScroller className={`toetcie-project-intro-illustration`}
                //     defaultTransform={`translateY(-50%)`}
                //     scrollDiv={props.projectsRef}>
                // <img src={`media/toetcie-intro.jpg`} />
                // </ParallaxDivScroller>
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            Tô & Cie is a Vietnamese canteen serving authentic homemade food.
                            I helped in the restaurant's digitization by imagining and creating a <Keyword>responsive</Keyword>, <Keyword>flexible</Keyword> website with an <Keyword>online food order</Keyword> feature.
                        </p>
                        <p>
                            Concerned with quality, we arranged an on-site visit to capture the atmosphere of the canteen.
                            Through our exchanges both in-person and online, we managed to distill the spirit, the DNA of what makes Tô & cie and iron out what features the website would have to deliver.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Tô & Cie est une cantine Vietnamienne proposant une cuisine authentique et familiale.
                            Dans le cadre de la digitalisation du restaurant, j'ai participé à la conception et à la réalisation d'un site web <Keyword>réactif</Keyword>, <Keyword>flexible</Keyword> et permettant au client de <Keyword>commander en ligne</Keyword>.
                        </p>
                        <p>
                            Afin de m'assurer que le site représenterait au mieux l'esprit et l'atmosphère de la cantine, je me suis rendu sur place pour une discussion avec le restaurateur.
                            Au fil de cette discussion et au travers des divers échanges, nous avons pu dégager l'essentiel, l'ADN de ce qui fait Tô & cie ainsi que les besoins principaux auxquels le site devrait répondre.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectIntro;