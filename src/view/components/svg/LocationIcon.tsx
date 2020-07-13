import React from 'react';
import InlineSvg, { IInlineSvgProps } from './InlineSvg';

interface ILocationIconProps extends IInlineSvgProps{

}

const LocationIcon : React.FC<ILocationIconProps> = props => {
    const {viewBox, ...otherProps} = props;
    return (
        <InlineSvg viewBox="0 0 12.0632 15.339421" {...otherProps}>
            <path style={{
                fill : "currentColor",
                stroke: "none"
            }}
            d="M 5.41173,15.02993 C 0.84725,8.71923 0,8.07156 0,5.75228 0,2.57537 2.70043,2.2175602e-8 6.0316,2.2175602e-8 9.3627703,2.2175602e-8 12.0632,2.57537 12.0632,5.75228 c 0,2.31928 -0.84725,2.96695 -5.4117297,9.27765 -0.29954,0.41267 -0.9402403,0.41264 -1.2397403,0 z M 6.0316,8.14906 c 1.3879903,0 2.5131703,-1.07307 2.5131703,-2.39678 0,-1.32371 -1.12518,-2.39678 -2.5131703,-2.39678 -1.38799,0 -2.51316,1.07307 -2.51316,2.39678 0,1.32371 1.12517,2.39678 2.51316,2.39678 z"/>
        </InlineSvg>
    )
}
export default LocationIcon;