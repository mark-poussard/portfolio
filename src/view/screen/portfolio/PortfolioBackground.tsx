import React from 'react';
import './PortfolioBackground.scss';

interface IPortfolioBackgroundProps{
    active : boolean;
}

const PortfolioBackground : React.FC<IPortfolioBackgroundProps> = props => {
    return (
        <div className={`portfolio-background`} style={{
            left: (props.active)?`0%`:`100%`
        }}/>
    )
}
export default PortfolioBackground;