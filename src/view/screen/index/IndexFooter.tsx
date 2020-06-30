import React from 'react';
import LinkedIn from '../../components/svg/LinkedIn';
import Github from '../../components/svg/Github';
import Email from '../../components/svg/Email';
import './IndexFooter.scss';

const IndexFooter : React.FC = props => {
    return (
        <footer className={`index-footer`}>
            <a className={`linkedin`} href={`https://www.linkedin.com/in/mark-poussard/`} target="_blank"><LinkedIn /></a>
            <a className={`github`} href={`https://github.com/mark-poussard`} target="_blank"><Github /></a>
            <a className={`email`} href={`mailto:poussard.mark@gmail.com`} target="_blank"><Email /></a>
        </footer>
    )
}
export default IndexFooter;