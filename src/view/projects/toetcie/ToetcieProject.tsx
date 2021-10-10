import React from 'react';
import ProjectSection from '../ProjectSection';
import './ToetcieProject.scss';
import ToetcieProjectIntro from './ToetcieProjectIntro';
import ToetcieProjectMobile from './ToetcieProjectMobile';
import ToetcieProjectOrder from './ToetcieProjectOrder';
import ToetcieProjectEditable from './ToetcieProjectEditable';
import ToetcieProjectGraphism from './ToetcieProjectGraphism';

interface IToetcieProjectProps{
    projectsRef : HTMLDivElement;
}

const ToetcieProject : React.FC<IToetcieProjectProps> = props => {
    return (
        <ProjectSection 
            className={`toetcie-project`}
            name={`To & Cie`}
            url={`https://mark.poussard.io/toetcie/`}>
            <ToetcieProjectIntro projectsRef={props.projectsRef}/>
            <ToetcieProjectMobile />
            <ToetcieProjectOrder />
            <ToetcieProjectEditable />
            <ToetcieProjectGraphism />
        </ProjectSection>
    )
}
export default ToetcieProject;