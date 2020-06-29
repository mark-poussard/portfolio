import React from 'react';
import './Index.scss';
import IndexFooter from './IndexFooter';
import NameTitle from './NameTitle';
import IndexPresentationText from '../index-flash/IndexPresentationText';
import ArrowButton from '../../components/button/ArrowButton';
import PortfolioTransition from './PortfolioTransition';

const Index : React.FC = props => {
    return (
        <div className={`index`}>
            <NameTitle />
            <IndexPresentationText />
            <IndexFooter />
            <PortfolioTransition />
        </div>
    )
}
export default Index;