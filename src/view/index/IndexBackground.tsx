import React from 'react';
import './IndexBackground.scss';
import HighlightGrid from '../components/highlight-grid/HighlightGrid';

const IndexBackground : React.FC = props => {
    return (
        <div className={`index-background`}>
            <HighlightGrid />
        </div>
    )   
}
export default IndexBackground;