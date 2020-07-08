import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import './ParallaxDivScroller.scss';

interface IParallaxDivScrollerProps{
    className ?: string;
}

const ParallaxDivScroller : React.FC<IParallaxDivScrollerProps> = props => {
    const className = (props.className != null)?props.className:"";
    const [stop, setStop] = useState(false);
    const stopRef = useRef<HTMLDivElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);
    const detect = useCallback(() => {
        const stopTop = stopRef.current!.getBoundingClientRect().top;
        const parallaxTop = parallaxRef.current!.getBoundingClientRect().top;
        console.log(`stopTop : ${stopTop}`);
        console.log(`parallaxTop : ${parallaxTop}`);
        if(parallaxTop <= stopTop){
            setStop(true);
        }
        else if(stop){
            setStop(false);
        }
    }, []);
    useEffect(() => {
        detect();
        addEventListener("scroll", detect);
        addEventListener("resize", detect);
        return () => {
            removeEventListener("scroll", detect);
            removeEventListener("resize", detect);
        };
    }, []);
    return (
        <div className={`parallax-div-scroller`}>
            <div className={`parallax-div-scroller-detector`} ref={stopRef} />
            <div className={`parallax-div ${className}`} ref={parallaxRef} style={{
                transform : (stop)?"none":undefined
            }}>
                {props.children}
            </div>
        </div>
    )
}
export default ParallaxDivScroller;