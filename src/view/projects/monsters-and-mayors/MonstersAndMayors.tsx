import React from 'react';
import ProjectSection from '../ProjectSection';
import MonstersAndMayorsIntro from './MonstersAndMayorsIntro';

const MonstersAndMayors : React.FC = props => {
    return (
        <ProjectSection 
            className={`monsters-and-mayors`}
            name={`Monsters & Mayors`}
            url={`https://monsters-and-mayors.com/`}>
                <MonstersAndMayorsIntro />
        </ProjectSection>
    )
}
export default MonstersAndMayors;