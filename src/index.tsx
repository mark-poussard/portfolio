import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContext from './AppContext';

ReactDOM.render(
  <AppContext />,
  document.getElementById('root')
);

// serviceWorker.register();