import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import ProjectSubSection from '../ProjectSubSection';
import './CorrectOpticProjectIntro.scss';
import Keyword from '../../components/text/Keyword';

const CorrectOpticProjectIntro : React.FC = props => {
    return (
        <ProjectSubSection className={`correct-optic-project-intro`}
            illustration={
                <img className={`correct-optic-project-intro-illustration`} 
                    src={`media/correct-optic-intro.jpg`} />
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            Correct Optic is a local optical store that delivers great service to all.
                        </p>
                        <p>
                            I worked on replacing the old website by an up to date, <Keyword>fashionable version</Keyword> that would mirror the shop's identity better.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Correct Optic est un magasin d'optique proposant des verres pour tous, de la haute gamme aux lunettes accessibles.
                        </p>
                        <p>
                            J'ai participé à la réalisation d'un <Keyword>site vitrine tendance</Keyword> remplaçant une version précédente datée.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default CorrectOpticProjectIntro;