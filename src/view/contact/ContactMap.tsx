import React from 'react';
import WorldMap from '../components/svg/Worldmap';
import './ContactMap.scss';

// Athens x={2220} y={350}
// Thessaloniki x={2225} y={305}

const ContactMap : React.FC = props => {
    return (
        <div className={`contact-map`}>
            <WorldMap className={`contact-map-svg`} x={2225} y={305}/>
        </div>
    )
}
export default ContactMap;