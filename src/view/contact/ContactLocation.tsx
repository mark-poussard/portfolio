import React, { useEffect, useState } from 'react';
import './ContactLocation.scss';

interface IContactLocationProps{
    display : boolean;
}

const ContactLocation : React.FC<IContactLocationProps> = props => {
    const location = "Marseille";
    const locationRoulette = ["Paris", "Bangkok", "London", "Tokyo", "Brisbane", "Hanoi"]
    const [display, setDisplay] = useState(props.display);
    useEffect(() => {
        if(props.display){
            setDisplay(true);
        }
        else{
            setTimeout(() => setDisplay(false), 500);
        }
    }, [props.display]);
    if(!display) return null;
    return (
        <div className={`contact-location`}>
            <span className={`contact-location-sizer`}>
                {location}
            </span>
            <div className={`contact-location-values`}>
                {[...locationRoulette, location].map(loc => 
                    <div className={`contact-location-values`}>{loc}</div>
                )}
            </div>
        </div>
    )
}
export default ContactLocation;