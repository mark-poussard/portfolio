import React from 'react';
import ArrowButton from '../../components/button/ArrowButton';
import './PortfolioButton.scss';
import { Page } from '../Page';

interface IPortfolioButtonProps{
    setPage : (page : Page) => void;
}

const PortfolioButton : React.FC<IPortfolioButtonProps> = props => {
    return (
        <div className={`portfolio-button`} >
            <ArrowButton right text={`Portfolio`} 
                onClick={() => props.setPage(Page.PORTFOLIO)}/>
        </div>
    )
}
export default PortfolioButton;