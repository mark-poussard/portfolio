import React from 'react';
import './ContactEmailLink.scss';

const ContactEmailLink : React.FC = props => {
    return (
        <a className={`contact-email-link`} href={`mailto:mark@poussard.io`} target={`_blank`}>mark@poussard.io</a>
    )
}
export default ContactEmailLink;