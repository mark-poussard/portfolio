import React, { useEffect, useCallback, useRef } from 'react';

interface IStickyBottomDivProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    deps?: React.InputIdentityList;
}

const StickyBottomDiv : React.FC<IStickyBottomDivProps> = props => {
    const divRef = useRef<HTMLDivElement>(null);
    const sizeDiv = useCallback(() => {
        if(divRef.current != null){
            const vh = window.innerHeight;
            const divTop = divRef.current.getBoundingClientRect().top;
            const height = vh - divTop;
            divRef.current.style.height = `${height}px`;
        }
    }, []);
    useEffect(() => {
        sizeDiv();
    }, props.deps);
    useEffect(() => {
        addEventListener("resize", sizeDiv);
        return () => removeEventListener("resize", sizeDiv);
    }, []);
    return (
        <div ref={divRef} {...props}>
            {props.children}
        </div>
    )
}
export default StickyBottomDiv;