import React from 'react';
import LocalDiv from '../components/local/LocalDiv';
import ContactEmailLink from './ContactEmailLink';

const ContactGetInTouch : React.FC = props => {
    return (
        <div className={`contact-get-in-touch`}>
            <ContactEmailLink />
            <p className={`contact-get-in-touch-text text`}>
                <LocalDiv>
                {{
                    en : "Get in touch, I'll send you a postcard !",
                    fr : "Contactez-moi, je vous enverrai une carte postale !"
                }}
                </LocalDiv>
            </p>
        </div>
    )
}
export default ContactGetInTouch;