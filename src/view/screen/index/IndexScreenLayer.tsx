import React from 'react';
import './IndexScreenLayer.scss';
import IndexTitle from './IndexTitle';
import IndexContact from './IndexContact';

export enum IndexScreenLayerColor{
    BLACK, WHITE
}

interface IIndexScreenLayerProps{
    className ?: string;
    color : IndexScreenLayerColor;
}

const IndexScreenLayer : React.FC<IIndexScreenLayerProps> = props => {
    const className = (props.className !== null)?props.className:"";
    let backgroundColor;
    let color;
    switch(props.color){
        case IndexScreenLayerColor.BLACK:
            backgroundColor = "black";
            color = "white";
            break;
        case IndexScreenLayerColor.WHITE:
            backgroundColor = "white";
            color = "black";
            break;
    }
    return (
        <div className={`index-screen-layer ${className}`}
            style={{
                backgroundColor,
                color
            }}>
            <IndexTitle />
        </div>
    )
}
export default IndexScreenLayer;