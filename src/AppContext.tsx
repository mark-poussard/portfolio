import React from 'react';
import LocalContext from './view/components/local/LocalContext';
import App from './App';

const AppContext : React.FC = props => {
    return (
        <LocalContext>
            <App />
        </LocalContext>
    )
}
export default AppContext;