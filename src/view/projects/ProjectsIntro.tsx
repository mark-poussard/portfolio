import React from 'react';
import LocalDiv from '../components/local/LocalDiv';
import './ProjectsIntro.scss';

const ProjectsIntro : React.FC = props => {
    return (
        <div className={`projects-intro`}>
            <LocalDiv>
                {{
                    en : 
                        <>
                            <p>
                                Displayed here are the projects I've worked on as a freelance developer. 
                            </p>
                            <p>
                                They do not include any previous work I designed and/or authored while employed.
                            </p>
                        </>,
                    fr : 
                        <>
                            <p>
                                Vous trouverez ci-dessous les projets que j'ai effectué en tant qu'auto-entrepreneur.
                            </p>
                            <p>
                                Aucun des travaux que j'ai pu effectué en tant qu'employé ne sont détaillés ici.
                            </p>
                        </>
                }}
            </LocalDiv>
        </div>
    )
}
export default ProjectsIntro;