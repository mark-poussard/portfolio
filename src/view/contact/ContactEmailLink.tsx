import React from 'react';
import './ContactEmailLink.scss';

const ContactEmailLink : React.FC = props => {
    return (
        <a className={`contact-email-link`} href={`mailto:poussard.mark@gmail.com`} target={`_blank`}>poussard.mark@gmail.com</a>
    )
}
export default ContactEmailLink;