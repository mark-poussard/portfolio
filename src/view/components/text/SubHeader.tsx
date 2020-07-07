import React from 'react';
import { ILocalProps } from '../local/Local';
import LocalText from '../local/LocalText';

interface ISubHeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    children : ILocalProps;
}

const SubHeader = (props : ISubHeaderProps) => {
    const {children, ...otherProps} = props;
    return (
        <h3 {...otherProps}>
            <LocalText {...children} />
        </h3>
    )
}
export default SubHeader;