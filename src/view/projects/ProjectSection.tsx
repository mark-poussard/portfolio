import React from 'react';
import LocalDiv, { ILocalDivContent } from '../components/local/LocalDiv';
import ImageDiv from '../components/media/ImageDiv';
import './ProjectSection.scss';

interface IProjectSectionProps{
    name : string;
    separator : string;
    media : React.ReactNode;
    children : ILocalDivContent;
    className ?: string;
}

const ProjectSection : React.FC<IProjectSectionProps> = props => {
    const className = (props.className != null)?props.className:"";
    return (
        <div className={`project-section ${className}`}>
            <h2>{props.name}</h2>
            <div className={`project-section-content`}>
                <div className={`project-section-text`}>
                    <LocalDiv>
                        {props.children}
                    </LocalDiv>
                </div>
                <div className={`project-section-media`}>
                    {props.media}
                </div>
            </div>
        </div>
    )
}
export default ProjectSection;