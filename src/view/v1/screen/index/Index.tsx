import React from 'react';
import IndexPresentationText from '../index-flash/IndexPresentationText';
import './Index.scss';
import IndexFooter from './IndexFooter';
import PortfolioButton from './PortfolioButton';
import { Page } from '../Page';
import Title from '../../components/text/Title';

interface IIndexProps{
    active : boolean;
    setPage : (page : Page) => void;
}

const Index : React.FC<IIndexProps> = props => {
    return (
        <div className={`index`}>
            <Title>Mark Poussard</Title>
            <IndexPresentationText />
            <IndexFooter />
            <PortfolioButton setPage={props.setPage}/>
        </div>
    )
}
export default Index;