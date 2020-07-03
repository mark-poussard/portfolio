import React from 'react';
import './Title.scss';

const Title : React.FC = props => {
    return (
        <h1 className={`title`}>
            {props.children}
        </h1>
    )
}
export default Title;