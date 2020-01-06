import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.scss';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';

const store = createStore();

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app'));
