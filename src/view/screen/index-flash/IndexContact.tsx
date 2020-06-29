import React from 'react';
import LinkedIn from '../../components/svg/LinkedIn';
import './IndexContact.scss';
import Github from '../../components/svg/Github';
import Email from '../../components/svg/Email';

const IndexContact : React.FC = props => {
    return (
        <div className={`index-contact`}>
            <a href={`https://www.linkedin.com/in/mark-poussard/`}><LinkedIn /></a>
            <a href={`https://github.com/mark-poussard`}><Github /></a>
            <a href={`mailto:poussard.mark@gmail.com`}><Email /></a>
        </div>
    )
}
export default IndexContact;