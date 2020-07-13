import React from 'react';
import LocalDiv from '../components/local/LocalDiv';
import ContactLocation from './ContactLocation';
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
            <ContactLocation display={props.display} />
        </p>
    )
}
export default ContactIAm;