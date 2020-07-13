import React, { useState } from 'react';
import Header from '../components/text/Header';
import ProjectLine from './ProjectLine';
import './Projects.scss';
import ToetcieProject from './toetcie/ToetcieProject';
import CorrectOpticProject from './correct-optic/CorrectOpticProject';
import { IBubblePageProps } from '../components/bubble/Bubble';

const Projects : React.FC<IBubblePageProps> = props => {
    const [projectsRef, setProjectsRef] = useState<HTMLDivElement | null>(null);
    return (
        <div className={`projets`} ref={setProjectsRef}>
            <Header>
            {{
                en : "Projects",
                fr : "Projets"
            }}
            </Header>
            {projectsRef != null &&
                <div className={`projets-list`}>
                        <ToetcieProject projectsRef={projectsRef}/>
                        <CorrectOpticProject />
                </div>
            }
        </div>
    )
}
export default Projects;