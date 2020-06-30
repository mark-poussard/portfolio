import React from 'react';
import Title from '../../components/text/Title';
import PortfolioBox from './PortfolioBox';
import PortfolioEntry from './PortfolioEntry';
import IndexButton from './IndexButton';
import { Page } from '../Page';
import './PortfolioContent.scss';

interface IPortfolioContentProps{
    active : boolean;
    setPage : (page : Page) => void;
}

const PortfolioContent : React.FC<IPortfolioContentProps> = props => {
    return (
        <div className={`portfolio-content`} style={{
            left: (props.active)?`0%`:`200%`
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
export default PortfolioContent;