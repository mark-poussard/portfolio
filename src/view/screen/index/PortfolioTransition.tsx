import React from 'react';
import ArrowButton from '../../components/button/ArrowButton';
import './PortfolioTransition.scss';

const PortfolioTransition : React.FC = props => {
    return (
        <div className={`portfolio-transition`}>
            <div className={`portfolio-transition-button`}>
                <ArrowButton right text={`Portfolio`}/>
            </div>
        </div>
    )
}
export default PortfolioTransition;