import React from 'react';
import ProjectSubSection from '../ProjectSubSection';
import './MonstersAndMayorsIntro.scss';
import LocalDiv from '../../components/local/LocalDiv';
import Keyword from '../../components/text/Keyword';

const MonstersAndMayorsIntro : React.FC = props => {
    return (
        <ProjectSubSection className={`mnm-project-intro`}
            illustration={
                <img className={`mnm-project-intro-illustration`} 
                    src={`media/mnm-intro.png`} />
            }
            left>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            Monsters & Mayors is an online web based game with <Keyword>+4,000 players</Keyword> worldwide.
                        </p>
                        <p>
                            The game is a heroic fantasy themed "castle builder", the aim being to build a town and collect adventurers.
                        </p>
                        <p>
                            Weekly and monthly events are automatically scheduled to animate the game and community.
                        </p>
                        <p>
                            The front-end is built using <Keyword>React</Keyword> and <Keyword>Typescript</Keyword>
                        </p>
                        <p>
                            The back-end uses <Keyword>Java</Keyword>, <Keyword>Spring</Keyword> and <Keyword>MySQL</Keyword>.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Monsters & Mayors est un jeu en ligne comptant plus de <Keyword>4 000 joueurs</Keyword>.
                        </p>
                        <p>
                            Le jeu consiste à construire une ville dans un univers heroic fantasy et de collectionner des aventuriers.
                        </p>
                        <p>
                            Des événements hebdomadaires et mensuels sont automatiquement organisés pour animer le jeu et la communauté.
                        </p>
                        <p>
                            Le front-end est construit sur <Keyword>React</Keyword> et <Keyword>Typescript</Keyword>
                        </p>
                        <p>
                            Le back-end utilise <Keyword>Java</Keyword>, <Keyword>Spring</Keyword> et <Keyword>MySQL</Keyword>.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    )
}
export default MonstersAndMayorsIntro;