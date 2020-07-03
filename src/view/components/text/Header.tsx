import React from 'react';
import { ILocalProps } from '../local/Local';
import LocalText from '../local/LocalText';

interface IHeaderProps{
    children : ILocalProps;
}

const Header = (props : IHeaderProps) => {
    return (
        <h1>
            <LocalText {...props.children} />
        </h1>
    )
}
export default Header;