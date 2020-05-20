import React from 'react';
import './App.scss';
import IndexScreen from './view/screen/index/IndexScreen';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
      <IndexScreen />
    </div>
  )
}
export default App;
