import React from 'react';
import './PortfolioBox.scss';

const PortfolioBox : React.FC = props => {
    return (
        <div className={`portfolio-box`}>
            {props.children}
        </div>
    )
}
export default PortfolioBox;