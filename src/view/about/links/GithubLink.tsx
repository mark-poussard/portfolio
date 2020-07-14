import React from 'react';
import Github from '../../components/svg/Github';

const GithubLink : React.FC = props => {
    return (
        <a className={`github-link`} href={`https://github.com/mark-poussard`} target={`_blank`}>
            <Github />
        </a>
    )
}
export default GithubLink;