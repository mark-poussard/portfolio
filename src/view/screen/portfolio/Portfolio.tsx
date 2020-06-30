import React from 'react';
import './Portfolio.scss';
import PortfolioEntry from './PortfolioEntry';
import { Page } from '../Page';
import PortfolioBox from './PortfolioBox';
import IndexButton from './IndexButton';
import Title from '../../components/text/Title';

interface IPortfolioProps{
    active : boolean;
    setPage : (page : Page) => void;
}

const Portfolio : React.FC<IPortfolioProps> = props => {
    return (
        <div className={`portfolio`} style={{
            display : (props.active)?"block":"none"
        }}>
            <Title>Portfolio</Title>
            <PortfolioBox>
                <PortfolioEntry thumbnail={`/toetcie-thumbnail.png`} video={`/toetcie-demo.mp4`}/>
                <PortfolioEntry thumbnail={`/correct-optic-thumbnail.png`}/>
            </PortfolioBox>
            <IndexButton setPage={props.setPage} />
        </div>
    )
}
export default Portfolio;