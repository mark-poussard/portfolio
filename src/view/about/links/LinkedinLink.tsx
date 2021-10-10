import React from 'react';
import LinkedIn from '../../components/svg/LinkedIn';

const LinkedinLink : React.FC = props => {
    return (
        <a className={`linkedin-link`} href={`mark.poussard.io/linkedin`} target={`_blank`}>
            <LinkedIn />
        </a>
    )
}
export default LinkedinLink;