import React from 'react';
import QuotationMarkOpen from '../components/svg/QuotationMarkOpen';
import LocalDiv from '../components/local/LocalDiv';
import QuotationMarkClose from '../components/svg/QuotationMarkClose';
import './Quote.scss';

interface IQuoteProps{
    author : string;
}

const Quote : React.FC<IQuoteProps> = props => {
    return (
        <div className={`quote`}>
            <div className={`quote-text`}>
                <QuotationMarkOpen className={`quote-open`}/>
                {props.children}
                <QuotationMarkClose className={`quote-close`}/>
            </div>
            <div className={`quote-author`}>
                - {props.author}
            </div>
        </div>
    )
}
export default Quote;