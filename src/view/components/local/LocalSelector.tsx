import React, { useContext } from 'react';
import { LocalValueContext, SetLocalContext } from './LocalContext';
import Local from './Local';

const LocalSelector : React.FC = props => {
    const local = useContext(LocalValueContext);
    const setLocal = useContext(SetLocalContext);
    const onClick = () => {
        if(local === Local.EN){
            setLocal(Local.FR);
        }
        else{
            setLocal(Local.EN);
        }
    }
    return (
        <div className={`local-selector`} 
            onClick={onClick}>
            {local.getSmallName()}
        </div>
    )
}
export default LocalSelector;