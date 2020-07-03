import React, { useContext } from 'react';
import Local, { ILocalProps } from './Local';
import { LocalValueContext } from './LocalContext';

const LocalText : React.FC<ILocalProps> = props => {
    const local = useContext(LocalValueContext);
    let text : string;
    switch(local){
        case Local.EN:
            text = props.en;
            break;
        case Local.FR:
            text = props.fr;
            break;
        default :
            text = "?? Undefined local ??"
    }
    return (
        <>
            {text}
        </>
    )
}
export default LocalText;