import React, { useRef, useEffect, useCallback } from 'react';

interface IVisionDetectorProps {
    setVisible : (visible : boolean) => void;
    className ?: string;
}

const VisionDetector : React.FC<IVisionDetectorProps> = props => {
    const detectorRef = useRef<HTMLDivElement>(null);
    const isElementInViewport = () => {
        const el = detectorRef.current!;
        var rect = el.getBoundingClientRect();
    
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }

    const detects = useCallback(() => {
        if (isElementInViewport()) {
            props.setVisible(true);
        }
        else{
            props.setVisible(false);
        }
    }, [props.setVisible]);

    useEffect(() => {
        detects();
        addEventListener('scroll', detects, false);
        addEventListener('resize', detects, false);
        return () => {
            removeEventListener('scroll', detects, false);
            removeEventListener('resize', detects, false);
        };
    }, [props.setVisible]);

    return (
            <div className={props.className} ref={detectorRef} />
    );
}

export default VisionDetector;