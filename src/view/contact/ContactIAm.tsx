import React from 'react';
import ContactLocationRoulette from './ContactLocationRoulette';
import LocalSpan from '../components/local/LocalSpan';

interface IContactIAmProps{
    display : boolean;
}

const ContactIAm : React.FC<IContactIAmProps> = props => {
    return (
        <p className={`contact-i-am text`}>
            <LocalSpan>
            {{
                en : <>Right now, I am in </>,
                fr : <>En ce moment, je suis à </>
            }}
            </LocalSpan>
            <ContactLocationRoulette display={props.display} />
        </p>
    )
}
export default ContactIAm;