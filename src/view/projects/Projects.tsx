import React, { useState } from 'react';
import Header from '../components/text/Header';
import './Projects.scss';
import ToetcieProject from './toetcie/ToetcieProject';
import CorrectOpticProject from './correct-optic/CorrectOpticProject';
import { IBubblePageProps } from '../components/bubble/Bubble';
import ProjectsIntro from './ProjectsIntro';
import CoffeeProject from './coffee/CoffeeProject';
import MonstersAndMayorsIntro from './monsters-and-mayors/MonstersAndMayorsIntro';
import MonstersAndMayors from './monsters-and-mayors/MonstersAndMayors';

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
                        <MonstersAndMayors />
                        <CoffeeProject />
                        <ToetcieProject projectsRef={projectsRef}/>
                        <CorrectOpticProject />
                </div>
            }
        </div>
    )
}
export default Projects;