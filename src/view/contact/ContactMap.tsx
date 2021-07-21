import React from 'react';
import WorldMap from '../components/svg/Worldmap';
import './ContactMap.scss';

// Athens x={2220} y={350}

const ContactMap : React.FC = props => {
    return (
        <div className={`contact-map`}>
            <WorldMap className={`contact-map-svg`} x={2220} y={350}/>
        </div>
    )
}
export default ContactMap;