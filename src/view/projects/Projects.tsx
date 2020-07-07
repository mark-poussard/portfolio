import React from 'react';
import Header from '../components/text/Header';
import ProjectLine from './ProjectLine';
import './Projects.scss';
import ToetcieProject from './toetcie/ToetcieProject';

const Projects : React.FC = props => {
    return (
        <div className={`projets`}>
            <Header>
            {{
                en : "Projects",
                fr : "Projets"
            }}
            </Header>
            <ToetcieProject />
        </div>
    )
}
export default Projects;