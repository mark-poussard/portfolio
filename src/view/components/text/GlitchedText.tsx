import React from 'react';
import './GlitchedText.scss';

interface IGlitchedTextProps{
    children ?: string;
}

const GlitchedText : React.FC<IGlitchedTextProps> = props => {
    return (
        <div className={`glitched-text-wrapper`}>
            <h1 className={`glitch`}>
                <span className={`before`}>{props.children}</span>
                <span>{props.children}</span>
                <span className={`after`}>{props.children}</span>
            </h1>
        </div>
    )
}
export default GlitchedText;