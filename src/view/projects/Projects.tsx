import React from 'react';
import Header from '../components/text/Header';
import ProjectLine from './ProjectLine';
import './Projects.scss';
import ToetcieProject from './toetcie/ToetcieProject';
import CorrectOpticProject from './correct-optic/CorrectOpticProject';

const Projects : React.FC = props => {
    return (
        <div className={`projets`}>
            <Header>
            {{
                en : "Projects",
                fr : "Projets"
            }}
            </Header>
            <div className={`projets-list`}>
                <ToetcieProject />
                <CorrectOpticProject />
            </div>
        </div>
    )
}
export default Projects;