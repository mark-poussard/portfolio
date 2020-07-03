import React from 'react';
import { ILocalProps } from '../local/Local';
import LocalText from '../local/LocalText';

interface IParagraphProps{
    children : ILocalProps;
}

const Paragraph = (props : IParagraphProps) => {
    return (
        <p>
            <LocalText {...props.children} />
        </p>
    )
}
export default Paragraph;