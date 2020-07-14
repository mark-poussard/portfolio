import React from 'react';
import './Keyword.scss';

const Keyword : React.FC = props => {
    return (
        <span className={`keyword`}>
            {props.children}
        </span>
    )
}
export default Keyword;