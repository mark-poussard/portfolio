import React, { useState, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import './ParallaxDivScroller.scss';

interface IParallaxDivScrollerProps{
    scrollDiv : HTMLDivElement;
    className ?: string;
}

const ParallaxDivScroller : React.FC<IParallaxDivScrollerProps> = props => {
    const className = (props.className != null)?props.className:"";
    const [stop, setStop] = useState(false);
    const parallaxRef = useRef<HTMLDivElement>(null);
    const detect = useCallback(() => {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const parallaxBox = parallaxRef.current!.getBoundingClientRect();
        if(parallaxBox.top <= (vh/2) - (parallaxBox.height/2)){
            setStop(true);
        }
        else{
            setStop(false);
        }
    }, []);
    useEffect(() => {
        detect();
        props.scrollDiv.addEventListener("scroll", detect);
        addEventListener("resize", detect);
        return () => {
            props.scrollDiv.removeEventListener("scroll", detect);
            removeEventListener("resize", detect);
        };
    }, [props.scrollDiv]);
    return (
        <div className={`parallax-div ${className}`} ref={parallaxRef} style={{
            transform : (stop)?"none":undefined
        }}>
            {props.children}
        </div>
    )
}
export default ParallaxDivScroller;