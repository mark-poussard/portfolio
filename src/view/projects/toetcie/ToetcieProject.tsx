import React from 'react';
import ProjectSection from '../ProjectSection';
import './ToetcieProject.scss';
import ToetcieProjectIntro from './ToetcieProjectIntro';
import ToetcieProjectMobile from './ToetcieProjectMobile';
import ToetcieProjectOrder from './ToetcieProjectOrder';
import ToetcieProjectEditable from './ToetcieProjectEditable';
import ToetcieProjectGraphism from './ToetcieProjectGraphism';

const ToetcieProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`toetcie-project`}
            name={`To & Cie`}>
            <ToetcieProjectIntro />
            <ToetcieProjectMobile />
            <ToetcieProjectOrder />
            <ToetcieProjectEditable />
            <ToetcieProjectGraphism />
        </ProjectSection>
    )
}
export default ToetcieProject;