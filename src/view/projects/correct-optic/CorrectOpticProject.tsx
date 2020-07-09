import React from 'react';
import ProjectSection from '../ProjectSection';
import CorrectOpticProjectIntro from './CorrectOpticProjectIntro';
import CorrectOpticGraphism from './CorrectOpticGraphism';

const CorrectOpticProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`correct-optic-project`}
            name={`Correct Optic`}>
            <CorrectOpticProjectIntro />
            <CorrectOpticGraphism />
        </ProjectSection>
    )
}
export default CorrectOpticProject;