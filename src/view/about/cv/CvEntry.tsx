import React from 'react';
import './CvEntry.scss';

interface ICvEntryProps{
    className ?: string;
    date : string;
    location : React.ReactNode;
    illustration : React.ReactNode;
    title : string;
}

const CvEntry : React.FC<ICvEntryProps> = props => {
    const className = (props.className != null)?props.className:"";
    return (
        <div className={`cv-entry ${className}`}>
            <h3 className={`cv-entry-header`}>
                <div className={`cv-entry-date`}>
                    {props.date}
                </div>
                <div className={`cv-entry-location`}>
                    {props.location}
                </div>
            </h3>
            <div className={`cv-entry-content`}>
                <div className={`cv-entry-illustration`}>
                    {props.illustration}
                </div>
                <div className={`cv-entry-text`}>
                    <h3 className={`cv-entry-title`}>
                        {props.title}
                    </h3>
                    <div className={`cv-entry-text-content`}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CvEntry;