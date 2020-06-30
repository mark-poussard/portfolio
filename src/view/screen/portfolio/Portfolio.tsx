import React from 'react';
import { Page } from '../Page';
import './Portfolio.scss';
import PortfolioBackground from './PortfolioBackground';
import PortfolioContent from './PortfolioContent';

interface IPortfolioProps{
    active : boolean;
    setPage : (page : Page) => void;
}

const Portfolio : React.FC<IPortfolioProps> = props => {
    return (
        <div className={`portfolio`}>
            <PortfolioBackground active={props.active}/>
            <PortfolioContent active={props.active} setPage={props.setPage}/>
        </div>
    )
}
export default Portfolio;