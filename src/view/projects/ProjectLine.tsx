import React from 'react';
import './ProjectLine.scss';
import Paragraph from '../components/text/Paragraph';
import { ILocalProps } from '../components/local/Local';

interface IProjectLineProps{
    name : string;
    children : ILocalProps;
}

const ProjectLine : React.FC<IProjectLineProps> = props => {
    return (
        <div className={`project-line`}>
            <div className={`project-details`}>
                <h2>{props.name}</h2>
                <Paragraph>{props.children}</Paragraph>
            </div>
            <div className={`project-illustration`}>
            </div>
        </div>
    )
}
export default ProjectLine;