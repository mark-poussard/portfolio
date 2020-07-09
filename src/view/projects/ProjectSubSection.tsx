import React from 'react';
import './ProjectSubSection.scss';

interface IProjectSubSectionProps{
    header ?: React.ReactNode;
    className ?: string;
    illustration : React.ReactNode;
    left ?: boolean;
}

const ProjectSubSection : React.FC<IProjectSubSectionProps> = props => {
    const className = (props.className != null)?props.className:"";
    const leftClassName = (props.left === true)?"left":"";
    const mobileClassName = (props.left === true)?"mobile":"";
    return (
        <div className={`project-sub-section ${className}`}>
            {props.left === true &&
                <div className={`project-sub-section-illustration left`}>
                    {props.illustration}
                </div>
            }
            <div className={`project-sub-section-text ${leftClassName}`}>
                {props.header != null && 
                    <h3>{props.header}</h3>
                }
                {props.children}
            </div>
            <div className={`project-sub-section-illustration ${mobileClassName}`}>
                {props.illustration}
            </div>
        </div>
    )
}
export default ProjectSubSection;