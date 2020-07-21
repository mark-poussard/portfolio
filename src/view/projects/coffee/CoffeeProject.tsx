import React from 'react';
import ProjectSection from '../ProjectSection';
import CoffeeProjectIntro from './CoffeeProjectIntro';

const CoffeeProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`coffee-project`}
            name={`Coffee`}
            url={`http://resto-json-editor-testenv.s3-website-eu-west-1.amazonaws.com/`}>
                <CoffeeProjectIntro />
        </ProjectSection>
    )
}
export default CoffeeProject;