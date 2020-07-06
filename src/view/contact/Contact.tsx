import React from 'react';
import Header from '../components/text/Header';

const Contact : React.FC = props => {
    return (
        <div className={`contact`}>
            <Header>
            {{
                en : "Contact",
                fr : "Contact"
            }}
            </Header>
        </div>
    )
}
export default Contact;