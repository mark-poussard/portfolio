import React from 'react';
import './ProjectSection.scss';
import ProjectWebsiteLink from './ProjectWebsiteLink';

interface IProjectSectionProps{
    name : string;
    className ?: string;
    url ?: string;
}

const ProjectSection : React.FC<IProjectSectionProps> = props => {
    const className = (props.className != null)?props.className:"";
    return (
        <div className={`project-section ${className}`}>
            <h2>{props.name}</h2>
            <div className={`project-section-content`}>
                {props.children}
                <ProjectWebsiteLink url={props.url} />
            </div>
        </div>
    )
}
export default ProjectSection;