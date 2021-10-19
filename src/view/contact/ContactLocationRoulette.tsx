import React, { useEffect, useState } from 'react';
import './ContactLocationRoulette.scss';

interface IContactLocationRouletteProps{
    display : boolean;
}

const ContactLocationRoulette : React.FC<IContactLocationRouletteProps> = props => {
    const location = "Malta";
    const locationRoulette = ["Paris", "Bangkok", "London", "Windhoek", "Đà Nẵng", "Tokyo", "Brisbane", "Bordeaux", "Berlin", "Hà nội", "Marseille", "Montpellier", "Napoli", "Αθήνα", "θεσσαλονικη"]
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
                {[...locationRoulette, location].reduce((a,b) => (a.length > b.length)?a:b, "")}
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