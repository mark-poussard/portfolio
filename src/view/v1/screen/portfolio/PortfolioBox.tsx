import React from 'react';
import './PortfolioBox.scss';

const PortfolioBox : React.FC = props => {
    return (
        <div className={`portfolio-box`}>
            <div className={`portfolio-box-content`}>
                {props.children}
            </div>
        </div>
    )
}
export default PortfolioBox;