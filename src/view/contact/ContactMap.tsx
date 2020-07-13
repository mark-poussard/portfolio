import React from 'react';
import './ContactMap.scss';
import LocationIcon from '../components/svg/LocationIcon';

const ContactMap : React.FC = props => {
    return (
        <div className={`contact-map`}>
            <img className={`contact-map-illustration`} src="worldmap2.svg" />
            <LocationIcon className={`contact-map-location`}/>
        </div>
    )
}
export default ContactMap;