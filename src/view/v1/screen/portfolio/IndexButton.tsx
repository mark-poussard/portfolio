import React from 'react';
import './IndexButton.scss';
import ArrowButton from '../../components/button/ArrowButton';
import { Page } from '../Page';

interface IIndexButtonProps{
    setPage : (page : Page) => void;
}

const IndexButton : React.FC<IIndexButtonProps> = props => {
    return (
        <div className={`index-button`}>
            <ArrowButton left text={`Index`} 
                onClick={() => props.setPage(Page.INDEX)}/>
        </div>
    )
}
export default IndexButton;