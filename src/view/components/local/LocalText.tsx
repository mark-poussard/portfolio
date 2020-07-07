import React from 'react';
import { ILocalProps } from './Local';
import LocalNode from './LocalNode';

const LocalText : React.FC<ILocalProps> = props => {
    return (
        <LocalNode {...props}/>
    )
}
export default LocalText;