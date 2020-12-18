import React from 'react';
import WorldMap from '../components/svg/Worldmap';
import './ContactMap.scss';

const ContactMap : React.FC = props => {
    return (
        <div className={`contact-map`}>
            <WorldMap className={`contact-map-svg`} x={1980} y={190}/>
        </div>
    )
}
export default ContactMap;