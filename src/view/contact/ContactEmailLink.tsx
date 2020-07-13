import React from 'react';
import './ContactEmailLink.scss';

const ContactEmailLink : React.FC = props => {
    return (
        <a className={`contact-email-link`} href={`mailto:poussard.mark@gmail.com`}>poussard.mark@gmail.com</a>
    )
}
export default ContactEmailLink;