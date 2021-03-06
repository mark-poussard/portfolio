import React, { useEffect, useState } from 'react';
import './ContactLocationRoulette.scss';

interface IContactLocationRouletteProps{
    display : boolean;
}

const ContactLocationRoulette : React.FC<IContactLocationRouletteProps> = props => {
    const location = "Paris";
    const locationRoulette = ["Paris", "Bangkok", "London", "Windhoek", "Da Nang", "Tokyo", "Brisbane", "Bordeaux", "Berlin", "Hanoi", "Marseille", "Montpellier", "Napoli"]
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
                {locationRoulette.reduce((a,b) => (a.length > b.length)?a:b, "")}
            </span>
            <div className={`contact-location-values`}>
                {[...locationRoulette, location].map(loc => 
                    <div className={`contact-location-values`}>{loc}</div>
                )}
            </div>
        </div>
    )
}
export default ContactLocationRoulette;