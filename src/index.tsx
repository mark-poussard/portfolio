import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContext from './AppContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppContext />,
  document.getElementById('root')
);

serviceWorker.register();