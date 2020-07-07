import React from 'react';
import { ILocalTrnsl } from './Local';
import LocalNode from './LocalNode';

export interface ILocalDivContent extends ILocalTrnsl<React.ReactNode>{
}

export interface ILocalDivProps{
    children : ILocalDivContent;
    className ?: string;
}

const LocalDiv = (props : ILocalDivProps) => {
    return (
        <LocalNode block className={props.className} {...props.children}/>
    )
}
export default LocalDiv;