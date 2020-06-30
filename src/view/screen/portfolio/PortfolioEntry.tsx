import React from 'react';
import './PortfolioEntry.scss';

interface IPortfolioEntryProps{
    thumbnail : string;
    video ?: string;
}

const PortfolioEntry : React.FC<IPortfolioEntryProps> = props => {
    return (
        <div className={`portfolio-entry`}>
            <img src={props.thumbnail} />
            {props.video != null &&
                <video src={props.video} muted autoPlay loop/>
            }
        </div>
    )
}
export default PortfolioEntry;