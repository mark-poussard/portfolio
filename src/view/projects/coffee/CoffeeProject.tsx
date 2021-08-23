import React from 'react';
import ProjectSection from '../ProjectSection';
import CoffeeProjectIntro from './CoffeeProjectIntro';

const CoffeeProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`coffee-project`}
            name={`Coffee`}
            url={`https://d1ox9oc0wr7i8k.cloudfront.net/`}>
                <CoffeeProjectIntro />
        </ProjectSection>
    )
}
export default CoffeeProject;