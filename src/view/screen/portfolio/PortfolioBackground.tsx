import React from 'react';
import './PortfolioBackground.scss';

interface IPortfolioBackgroundProps{
    active : boolean;
}

const PortfolioBackground : React.FC<IPortfolioBackgroundProps> = props => {
    return (
        <div className={`portfolio-background background-1`} style={{
            left: (props.active)?`-20%`:`100%`
        }}/>
    )
}
export default PortfolioBackground;