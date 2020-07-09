import React from 'react';
import LocalDiv from '../components/local/LocalDiv';
import './CvToggleButton.scss';

interface ICvToggleButtonProps{
    cv : boolean;
    setCv : (cv : boolean) => void;
}

const CvToggleButton : React.FC<ICvToggleButtonProps> = props => {
    const onClick = () => {
        props.setCv(!props.cv);
    }
    return (
        <button className={`cv-toggle-button`} 
            onClick={onClick}>
            {props.cv &&
                <LocalDiv>
                {{
                    en : "Me",
                    fr : "Moi"
                }}
                </LocalDiv>
            }
            {!props.cv &&
                <LocalDiv>
                {{
                    en : "My cv",
                    fr : "Mon cv"
                }}
                </LocalDiv>
            }
        </button>
    )
}
export default CvToggleButton;