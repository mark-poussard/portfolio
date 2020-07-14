import React from 'react';
import Email from '../../components/svg/Email';

const EmailLink : React.FC = props => {
    return (
        <a className={`email-link`} href={`mailto:poussard.mark@gmail.com`} target={`_blank`}>
            <Email />
        </a>
    )
}
export default EmailLink;