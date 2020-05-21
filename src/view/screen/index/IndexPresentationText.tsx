import React from 'react';
import './IndexPresentationText.scss';

const IndexPresentationText : React.FC = props => {
    return (
        <div className={`index-presentation-text`}>
            <p className={`text-1`}>
                Website creator
            </p>
            <p className={`text-2`}>
                Réalisation de site web
            </p>
        </div>
    )
}
export default IndexPresentationText;