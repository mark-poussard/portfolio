import React, { useState } from 'react';
import './App.scss';
import Index from './view/index/Index';

const App : React.FunctionComponent = props => {
    return (
        <div className={`App`}>
            <Index />
        </div>
    )
}
export default App;
