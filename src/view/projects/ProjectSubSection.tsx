import React from 'react';
import './ProjectSubSection.scss';
import SubHeader from '../components/text/SubHeader';
import { ILocalProps } from '../components/local/Local';

interface IProjectSubSectionProps{
    name : ILocalProps;
    className ?: string;
}

const ProjectSubSection : React.FC<IProjectSubSectionProps> = props => {
    const className = (props.className != null)?props.className:"";
    return (
        <div className={`project-sub-section ${className}`}>
            <SubHeader>{props.name}</SubHeader>
            {props.children}
        </div>
    )
}
export default ProjectSubSection;