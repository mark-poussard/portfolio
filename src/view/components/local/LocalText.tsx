import React, { useContext, useState, useEffect } from 'react';
import Local, { ILocalProps } from './Local';
import { LocalValueContext } from './LocalContext';
import './LocalText.scss';

const LocalText : React.FC<ILocalProps> = props => {
    const getText = (local : Local) => {
        switch(local){
            case Local.EN:
                return props.en;
            case Local.FR:
                return props.fr;
            default :
                return "?? Undefined local ??"
        }
    }
    const local = useContext(LocalValueContext);
    const [text, setText] = useState(getText(local));
    const [hide, setHide] = useState(false);
    useEffect(() => {
        setHide(true);
        setTimeout(() => {
            setText(getText(local));
            setHide(false);
        }, 500);
    }, [local]);
    return (
        <span className={`local-text`} style={{
            top: (hide)?"10px":"0px",
            opacity: (hide)?0:1
        }}>
            {text}
        </span>
    )
}
export default LocalText;