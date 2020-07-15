import React, { useState, useEffect, useRef } from 'react';
import { useViewportHeight, useViewportWidth } from '../../hooks/UseViewport';
import './HighlightGrid.scss';
import { useMousePosition } from '../../hooks/UseMousePosition';
import { isMobile } from '../../hooks/UseMediaQuery';

const HighlightGrid : React.FC = props => {
    let gutterX = 10;
    let gutterY = 10;
    const tileWidth = 50;
    const tileHeight = 50;

    const vh = useViewportHeight();
    const vw = useViewportWidth();
    const mousePosition = useMousePosition();
    const mobile = isMobile();

    const [tileHoverX, setTileHoverX] = useState(-10);
    const [tileHoverY, setTileHoverY] = useState(-10);

    const tileNbrX = Math.floor((vw - tileWidth)/(tileWidth + gutterX)) + 1;
    gutterX = (vw - (tileNbrX*tileWidth)) / (tileNbrX-1);
    gutterX = Math.floor(gutterX);

    const tileNbrY = Math.floor((vh - tileHeight)/(tileHeight + gutterY)) + 1;
    gutterY = (vh - (tileNbrY*tileHeight)) / (tileNbrY-1);
    gutterY = Math.floor(gutterY);

    useEffect(() => {
        if(!mobile){
            setTileHoverX(Math.floor(mousePosition.x / (tileWidth + gutterX)));
            setTileHoverY(Math.floor(mousePosition.y / (tileHeight + gutterY)));
        }
    }, [mousePosition, mobile]);

    const mobileAnimationRef = useRef<number | null>(null);
    const mobileAnimation = (step : number) => () => {
        if(step < tileNbrX * tileNbrY){
            const y = Math.floor(step / tileNbrX);
            const x = step - (y * tileNbrX);
            setTileHoverX(x);
            setTileHoverY(y);
            mobileAnimationRef.current = window.setTimeout(mobileAnimation(step+1), 20);
        }
        else{
            setTileHoverX(-10);
            setTileHoverY(-10);
            mobileAnimationRef.current = window.setTimeout(mobileAnimation(0), 5000);
        }
    }
    useEffect(() => {
        const clearRef = () => {
            if(mobileAnimationRef.current != null){
                window.clearTimeout(mobileAnimationRef.current);
                mobileAnimationRef.current = null;
            }
        }
        if(mobile){
            clearRef();
            setTileHoverX(-10);
            setTileHoverY(-10);
            mobileAnimationRef.current = window.setTimeout(mobileAnimation(0), 1000);
        }
        return clearRef;
    }, [mobile, vh, vw]);

    const getTileClassName = (x : number, y : number) => {
        const distance = ((x - tileHoverX)*(x - tileHoverX))+((y-tileHoverY)*(y-tileHoverY));
        if(distance === 0){
            return 'hover-distance-0';
        }
        if(distance <= 1){
            return 'hover-distance-1';
        }
        if(distance <= 2){
            return 'hover-distance-2';
        }
        if(distance <= 4){
            return 'hover-distance-4';
        }
        return "";
    }

    const tiles : JSX.Element[] = [];
    for(let y=0; y < tileNbrY; y++){
        for(let x=0; x < tileNbrX; x++){
            const marginRight = x !== tileNbrX-1;
            const marginBottom = y !== tileNbrY-1;
            tiles.push(
                <div className={`tile ${getTileClassName(x, y)}`} 
                    key={`${x}-${y}`} 
                    //onMouseEnter={onTileHover(x, y)}
                    style={{
                        width : tileWidth,
                        height : tileHeight,
                        marginRight : (marginRight)?gutterX:undefined,
                        marginBottom : (marginBottom)?gutterY:undefined
                    }}/>
            );
        }
    }
    return (
        <div className={`highlight-grid`}>
            {tiles}
        </div>
    )
}
export default HighlightGrid;