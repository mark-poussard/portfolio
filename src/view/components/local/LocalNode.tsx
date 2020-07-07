import React, { useContext, useState, useEffect } from 'react';
import Local, { ILocalProps, ILocalTrnsl } from './Local';
import { LocalValueContext } from './LocalContext';
import './LocalNode.scss';

interface ILocalNodeProps extends ILocalTrnsl<React.ReactNode>{
    block ?: boolean;
    className ?: string;
}

const LocalNode : React.FC<ILocalNodeProps> = props => {
    const getNode = (local : Local) : React.ReactNode | null => {
        switch(local){
            case Local.EN:
                return props.en;
            case Local.FR:
                return props.fr;
            default :
                return null;
        }
    }
    const className = (props.className != null)?props.className:"";
    const local = useContext(LocalValueContext);
    const [node, setNode] = useState(getNode(local));
    const [hide, setHide] = useState(false);
    useEffect(() => {
        setHide(true);
        setTimeout(() => {
            setNode(getNode(local));
            setHide(false);
        }, 500);
    }, [local]);
    return (
        <span className={`local-node ${className}`} style={{
            top: (hide)?"10px":"0px",
            opacity: (hide)?0:1,
            display: (props.block === true)?"block":undefined
        }}>
            {node}
        </span>
    )
}
export default LocalNode;