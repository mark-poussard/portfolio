import React, { useRef, useEffect } from "react";

export const useUpdate = (effect: React.EffectCallback, inputs?: React.InputIdentityList | undefined) => {
    const useEffectRanOnce = useRef(false);
    useEffect(() => {
        if(useEffectRanOnce.current === false){
            useEffectRanOnce.current = true;
            return ;
        }
        else{
            return effect();
        }
    }, inputs);
}