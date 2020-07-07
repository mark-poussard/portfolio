import React from 'react';
import LocalDiv, { ILocalDivContent } from '../components/local/LocalDiv';
import './ProjectLine.scss';
import ImageDiv from '../components/media/ImageDiv';

interface IProjectLineProps{
    name : string;
    illustration : string;
    children : ILocalDivContent;
}

const ProjectLine : React.FC<IProjectLineProps> = props => {
    return (
        <div className={`project-line`}>
            <div className={`project-details`}>
                <h2>{props.name}</h2>
                <LocalDiv>
                    {props.children}
                </LocalDiv>
            </div>
            <ImageDiv className={`project-illustration background`} src={props.illustration}/>
            <ImageDiv className={`project-illustration foreground`} src={props.illustration}/>
        </div>
    )
}
export default ProjectLine;