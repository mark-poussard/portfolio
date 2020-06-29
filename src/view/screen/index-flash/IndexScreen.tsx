import React from 'react';
import IndexScreenLayer, { IndexScreenLayerColor } from './IndexScreenLayer';
import './IndexScreen.scss';

const IndexScreen : React.FC = props => {
    return (
        <div className={`index-screen`}>
            <IndexScreenLayer color={IndexScreenLayerColor.BLACK}/>
            <IndexScreenLayer color={IndexScreenLayerColor.WHITE} className={`animated-layer-1`}/>
            <IndexScreenLayer color={IndexScreenLayerColor.BLACK} className={`animated-layer-2`}/>
        </div>
    )
}
export default IndexScreen;