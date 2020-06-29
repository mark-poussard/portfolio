import React from 'react';
import './App.scss';
import Index from './view/screen/index/Index';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <Index />
    </div>
  )
}
export default App;
