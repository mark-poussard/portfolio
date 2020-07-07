import React from 'react';
import { ILocalTrnsl } from './Local';
import LocalNode from './LocalNode';

export interface ILocalDivContent extends ILocalTrnsl<React.ReactNode>{
}

export interface ILocalDivProps{
    children : ILocalDivContent;
}

const LocalDiv = (props : ILocalDivProps) => {
    return (
        <LocalNode block {...props.children}/>
    )
}
export default LocalDiv;