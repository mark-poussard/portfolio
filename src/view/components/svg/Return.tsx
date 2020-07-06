import React from 'react';
import InlineSvg, { IInlineSvgProps } from './InlineSvg';

interface IReturnProps extends IInlineSvgProps{

}

const Return : React.FC<IReturnProps> = props => {
    const {viewBox, ...otherProps} = props;
    return (
        <InlineSvg viewBox="0 0 16 16" {...otherProps}>
            <path style={{
                    fill : "none",
                    stroke : "currentColor",
                    strokeWidth : 1,
                    strokeLinejoin : "round",
                    strokeLinecap : "round",
                }}
                // d="M 9.0001991,5.0000003 H 15 V 11 H 9.0001991 v 4 H 6.9999838 L 1,8 6.9999838,1.0000001 l 1.9997848,-2e-7 z"/>
                // d="M 6.9999838,15 1,8 6.9999838,1.0000001 l 1.9997848,-2e-7 4.305e-4,4.0000004 H 15 V 11 H 9.0001991 v 4"/>
                // d="M 6.9999838,15 1,8 6.9999838,1.0000001 l 1.9997848,-2e-7 4.305e-4,4.0000004 H 15 M 15,11 H 9.0001991 v 4"/>
                // d="M 6.9999838,15 1,8 6.9999838,1.0000001 m 1.9997848,-2e-7 4.305e-4,4.0000004 H 15 M 15,11 H 9.0001991 v 4"/>
                d="m 8.9997686,0.9999999 4.305e-4,4.0000004 H 15 V 11 H 9.0001991 v 4 M 6.9999838,15 1,8 6.9999838,1.0000001"/>
        </InlineSvg>
    )
}
export default Return;