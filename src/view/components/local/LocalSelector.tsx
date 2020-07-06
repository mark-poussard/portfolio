import React, { useContext } from 'react';
import { LocalValueContext, SetLocalContext } from './LocalContext';
import Local from './Local';
import './LocalSelector.scss';

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
                <span className={`local-selector-lang`}
                style={{
                    opacity: (local === Local.EN)?1:0.3
                }}>
                    EN
                </span>
                <span>
                    &nbsp;-&nbsp;
                </span>
                <span className={`local-selector-lang`}
                style={{
                    opacity: (local === Local.FR)?1:0.3
                }}>
                    FR
                </span>
        </div>
    )
}
export default LocalSelector;