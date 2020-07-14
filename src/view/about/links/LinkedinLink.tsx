import React from 'react';
import LinkedIn from '../../components/svg/LinkedIn';

const LinkedinLink : React.FC = props => {
    return (
        <a className={`linkedin-link`} href={`https://www.linkedin.com/in/mark-poussard/`} target={`_blank`}>
            <LinkedIn />
        </a>
    )
}
export default LinkedinLink;