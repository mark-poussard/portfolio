import React from 'react';
import ProjectSection from '../ProjectSection';
import CoffeeProjectIntro from './CoffeeProjectIntro';

const CoffeeProject : React.FC = props => {
    return (
        <ProjectSection 
            className={`coffee-project`}
            name={`Coffee`}
            url={`https://mark.poussard.io/coffee/`}>
                <CoffeeProjectIntro />
        </ProjectSection>
    )
}
export default CoffeeProject;