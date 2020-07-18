import React, { useState } from 'react';
import Header from '../components/text/Header';
import './Projects.scss';
import ToetcieProject from './toetcie/ToetcieProject';
import CorrectOpticProject from './correct-optic/CorrectOpticProject';
import { IBubblePageProps } from '../components/bubble/Bubble';
import ProjectsIntro from './ProjectsIntro';
import AuFournilDuChefProject from './au-fournil-du-chef/AuFournilDuChefProject';

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
            <ProjectsIntro />
            {projectsRef != null &&
                <div className={`projets-list`}>
                        <AuFournilDuChefProject />
                        <ToetcieProject projectsRef={projectsRef}/>
                        <CorrectOpticProject />
                </div>
            }
        </div>
    )
}
export default Projects;