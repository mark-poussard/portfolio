import React from 'react';
import { ILocalTrnsl } from './Local';
import LocalNode from './LocalNode';

export interface ILocalSpanContent extends ILocalTrnsl<React.ReactNode>{
}

export interface ILocalSpanProps{
    children : ILocalSpanContent;
    className ?: string;
}

const LocalSpan = (props : ILocalSpanProps) => {
    return (
        <LocalNode className={props.className} {...props.children}/>
    )
}
export default LocalSpan;