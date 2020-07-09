import React from 'react';
import LocalDiv, { ILocalDivContent } from '../components/local/LocalDiv';
import './ProjectLine.scss';

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
            <img className={`project-illustration background`} src={props.illustration}/>
            <img className={`project-illustration foreground`} src={props.illustration}/>
        </div>
    )
}
export default ProjectLine;