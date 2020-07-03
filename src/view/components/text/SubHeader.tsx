import React from 'react';
import { ILocalProps } from '../local/Local';
import LocalText from '../local/LocalText';

interface ISubHeaderProps{
    children : ILocalProps;
}

const SubHeader = (props : ISubHeaderProps) => {
    return (
        <h2>
            <LocalText {...props.children} />
        </h2>
    )
}
export default SubHeader;