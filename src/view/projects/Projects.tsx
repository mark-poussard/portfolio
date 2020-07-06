import React from 'react';
import Header from '../components/text/Header';
import ProjectLine from './ProjectLine';

const Projects : React.FC = props => {
    return (
        <div className={`projets`}>
            <Header>
            {{
                en : "Projects",
                fr : "Projets"
            }}
            </Header>
            <ProjectLine name={`To & Cie`}>
            {{
                en : "Working on restaurant website",
                fr : "Mise en place d'un site pour le restaurant"
            }}
            </ProjectLine>
        </div>
    )
}
export default Projects;