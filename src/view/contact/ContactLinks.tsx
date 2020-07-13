import React from 'react';
import './ContactLinks.scss';
import LinkedinLink from '../about/links/LinkedinLink';
import GithubLink from '../about/links/GithubLink';
import EmailLink from '../about/links/EmailLink';

const ContactLinks : React.FC = props => {
    return (
        <div className={`contact-links`}>
            <LinkedinLink />
            <GithubLink />
            <EmailLink />
        </div>
    )
}
export default ContactLinks;