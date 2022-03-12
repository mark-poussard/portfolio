import React from 'react';
import Header from '../components/text/Header';
import './Contact.scss';
import ContactGetInTouch from './ContactGetInTouch';
import ContactIAm from './ContactIAm';
import ContactLinks from './ContactLinks';
import ContactMap from './ContactMap';
import { IBubblePageProps } from '../components/bubble/Bubble';
import ContactEmailLink from './ContactEmailLink';

const Contact : React.FC<IBubblePageProps> = props => {
    return (
        <div className={`contact`}>
            <Header>
            {{
                en : "Contact",
                fr : "Contact"
            }}
            </Header>
            {/* <ContactIAm display={props.display} />
            <ContactMap />
            <ContactGetInTouch /> */}
            <ContactEmailLink />
            <ContactLinks />
        </div>
    )
}
export default Contact;