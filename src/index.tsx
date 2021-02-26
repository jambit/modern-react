import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-annie-use-your-telescope';

import App from './components/App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './style.scss';

ReactDOM.render(
    <ErrorBoundary render={() => <App />} />,
    document.getElementById('app')
);
// Notice how you could pass in components without wrapper if they don't have any props:
// ReactDOM.render(<ErrorBoundary render={App} />, document.getElementById('app'));
