import React from 'react';
import ProjectSection from '../ProjectSection';
import AuFournilDuChefIntro from './AuFournilDuChefIntro';

const AuFournilDuChefProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`au-fournil-du-chef-project`}
            name={`Au fournil du chef`}
            url={`http://resto-json-editor-testenv.s3-website-eu-west-1.amazonaws.com/`}>
                <AuFournilDuChefIntro />
        </ProjectSection>
    )
}
export default AuFournilDuChefProject;